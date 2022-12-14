import { useState, useEffect } from "react";
import "./Pdf.css";
import axios from "axios";
import headerImage from "../assets/generate_header.svg";
import { saveAs } from "file-saver";
import { Layout, Card, Select, Button, Modal } from "antd";
import { DownloadOutlined, SendOutlined } from "@ant-design/icons";

export default function GeneratePDF() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadings, setLoadings] = useState([]);

  const [state, setState] = useState({
    selected: "",
    patients: [],
    medications: [],
    contacts: [],
    allergies: [],
    medHistory: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get("/medications"),
      axios.get("/patients/1"),
      axios.get("/contacts?patientID=1"),
      axios.get("/allergies?patientID=1"),
      axios.get("/medical?patientID=1"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        medications: all[0].data,
        patient: all[1].data,
        contacts: all[2].data.contacts,
        allergies: all[3].data.allergies,
        medHistory: all[4].data.medical,
      }));
    });
  }, []);

  const contactsNames = state.contacts.map((contact) => {
    return { value: contact.name, label: contact.name };
  });

  const handleChange = (value) => {
    setState((prev) => ({
      ...prev,
      selected: value,
    }));
  };

  const sendEmail = function () {
    axios
      .post("/email/send", {
        contactName: state.selected,
        patient: state.patient[0],
      })
      .then(() => {
        console.log("email request sent");
      });
  };

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        countDown();
        return newLoadings;
      });
    }, 1500);
  };

  const createAndDownloadPdf = () => {
    axios.post("/pdf/create-pdf", state).then(() => {
      axios.get("/pdf/fetch-pdf", { responseType: "blob" }).then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "newPdf.pdf");
      });
    });
  };

  const send = () => {
    setTimeout();
  };

  const countDown = () => {
    const modal = Modal.success({
      title: "Email sent!",
      content: `Your records have been successfully delivered.`,
    });
  };

  return (
    <Layout style={{ marginLeft: 200, padding: 30 }}>
      <div className="information">
        <img className="ahp-photo" src={headerImage} alt="img" width="300px" />
      </div>
      <div className="pdf-container">
        <div className="download">
          <div id="download-text">
            Conveniently download all of your records here. Everything will be
            bundled into a PDF.
          </div>
          <Card
            title="Download"
            style={{ width: "30vw", height: "17vh" }}
            hoverable="true"
          >
            <DownloadOutlined
              style={{ fontSize: "65px" }}
              onClick={createAndDownloadPdf}
            />
          </Card>
        </div>
        <div className="send">
          <div id="download-text">
            Select one of your health care professionals to have your records
            sent by email.
          </div>
          <Card
            className="send-card"
            title="Send to Contact"
            hoverable="true"
            style={{ width: "30vw", height: "17vh" }}
          >
            <Select
              placeholder="Select Contact"
              style={{ width: "20vw" }}
              onChange={handleChange}
              options={contactsNames}
            />
            <Button
              type="primary"
              icon={<SendOutlined />}
              loading={loadings[0]}
              onClick={() => enterLoading(0)}
            >
              Send
            </Button>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
