import MedsListItem from "./MedsListItem";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Layout } from "antd";

// pass current data and prior data received from App.js as props to MedsListItem

export default function MedsList() {
  const [medicine, setMedicine] = useState([]);

  useEffect(() => {
    const fetchMedicine = async () => {
      const response = await axios("/medications");
      const data = await response;
      setMedicine(data.data);
    };
    fetchMedicine();
  }, []);

  const currentData = medicine.filter((item) => {
    return item.end_date === null;
  });

  const priorData = medicine.filter((item) => {
    return item.end_date !== null;
  });

  return (
    <Layout style={{ marginLeft: 200, padding: 30 }}>
      <div className="meds-page">
        <h2>Medications</h2>
        <br></br>
        <h3>Existing</h3>
        <MedsListItem currentData={currentData} priorData={priorData} />
      </div>
    </Layout>
  );
}
