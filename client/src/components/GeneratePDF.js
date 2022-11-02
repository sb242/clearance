import { useState, useEffect } from "react";
import "./Pdf.css";
import axios from "axios";
import headerImage from "../assets/generate_header.svg";
import { saveAs } from "file-saver";
import { Layout, Card, Select, Button } from "antd";
import { DownloadOutlined, SendOutlined } from "@ant-design/icons";

export default function GeneratePDF() {
  const [state, setState] = useState({
    patients: [],
    medications: [],
    contacts: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get("/medications"),
      axios.get("/patients/1"),
      axios.get("/contacts?patientID=1"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        medications: all[0].data,
        patients: all[1].data,
        contacts: all[2].data.contacts,
      }));
    });
  }, []);

  const contactsNames = state.contacts.map((contact) => {
    return { value: contact.name, label: contact.name };
  });

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const createAndDownloadPdf = () => {
    axios.post("/pdf/create-pdf", state).then(() => {
      axios.get("/pdf/fetch-pdf", { responseType: "blob" }).then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "newPdf.pdf");
      });
    });
  };

  return (
    <Layout style={{ marginLeft: 200, padding: 30 }}>
      <div className="information">
        <img className="ahp-photo" src={headerImage} alt="img" width="300px" />
      </div>
      <div className="pdf-container">
        <div className="download">
          <Card title="Download" style={{ width: "30vw" }} hoverable="true">
            <DownloadOutlined
              style={{ fontSize: "75px" }}
              onClick={createAndDownloadPdf}
            />
          </Card>
        </div>
        <div className="send">
          <Card
            title="Send to Contact"
            hoverable="true"
            style={{ width: "30vw" }}
          >
            <Select
              placeholder="Select Contact"
              style={{ width: "20vw" }}
              onChange={handleChange}
              options={contactsNames}
            />
            <Button type="primary" icon={<SendOutlined />}>
              Send
            </Button>
          </Card>
        </div>
      </div>
    </Layout>
  );
}