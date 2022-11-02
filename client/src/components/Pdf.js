import axios from "axios";
import { saveAs } from "file-saver";
import { useState, useEffect } from "react";
import { Layout, Card, Select, Button } from "antd";

import "./Pdf.css";
import { DownloadOutlined, SendOutlined } from "@ant-design/icons";

export default function Pdf() {
  const [state, setState] = useState({
    name: "Monday",
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

  const contactName = state.contacts.map((contact) => {
    return { value: contact.name, label: contact.name };
  });

  console.log("contactNames", contactName);

  console.log(state.patients, state.medications, state.contacts);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const createAndDownloadPdf = () => {
    axios.post("/create-pdf", state).then(() => {
      console.log("Hitting");
      axios.get("/fetch-pdf", { responseType: "blob" }).then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "newPdf.pdf");
      });
    });
  };

  return (
    <Layout style={{ marginLeft: 200, padding: 30 }}>
      <div className="Information">Header</div>
      <div className="pdf-container">
        <div className="download">
          <DownloadOutlined
            style={{ fontSize: "75px" }}
            onClick={createAndDownloadPdf}
          />
          {"Download"}
          Download Here
          <br />
          <button onClick={createAndDownloadPdf}>Download</button>
        </div>
        <div className="send">
          <Select
            placeholder="Select Contact"
            style={{ width: "22vw" }}
            onChange={handleChange}
            options={contactName}
          />
          <Button type="primary" icon={<SendOutlined />}>
            Send
          </Button>
        </div>
      </div>
    </Layout>
  );
}
