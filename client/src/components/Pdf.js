import axios from "axios";
import { saveAs } from "file-saver";
import { useState, useEffect } from "react";
import { Layout } from "antd";

export default function Pdf() {
  const [state, setState] = useState({
    name: "Monday",
    patients: [],
    medications: [],
  });

  useEffect(() => {
    Promise.all([axios.get("/medications"), axios.get("/patients/1")]).then(
      (all) => {
        setState((prev) => ({
          ...prev,
          medications: all[0].data,
          patients: all[1].data,
        }));
      }
    );
  }, []);

  console.log(state.patients, state.medications);

  const handleChange = ({ target: { value, name } }) =>
    setState({ [name]: value });

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
      <div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        <button onClick={createAndDownloadPdf}>Download</button>
      </div>
    </Layout>
  );
}
