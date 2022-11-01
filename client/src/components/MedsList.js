import MedsListItem from "./MedsListItem";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import medicationsImage from "../assets/medications.png";
import { Layout } from "antd";

// pass current data and prior data received from App.js as props to MedsListItem

export default function MedsList() {
  const [medicine, setMedicine] = useState([]);

  useEffect(() => {
    const fetchMedicine = async () => {
      const data = await axios("/medications");
      setMedicine(data.data);
    };
    fetchMedicine();
  }, []);

  const currentData = medicine.filter((item) => {
    return item.end_date === null;
  });

  // const filteredCurrentData = medicine.filter((item) => {
  //   return item.end_date === null;
  // });

  // const currentData = filteredCurrentData.map((item) => {
  //   moment(item.start_date).utc().format('MM/DD/YYYY')
  // })

  const priorData = medicine.filter((item) => {
    return item.end_date !== null;
  });

  return (
    <Layout style={{ marginLeft: 200, padding: 30 }}>
      <div className="meds-page">
        <h2 style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
        >
          Medications
          <img
            className="medications-photo"
            src={medicationsImage}
            alt="img"
            style={{ width: "15vw", height: "15vw" }}
          />
        </h2>
        <br></br>
        <h3>Existing</h3>
        <MedsListItem
          currentData={currentData}
          priorData={priorData}
          setMedicine={setMedicine}
          medicine={medicine}
        />
      </div>
    </Layout>
  );
}
