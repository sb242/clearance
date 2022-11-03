import MedsListItem from "./MedsListItem";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import medicationsImage from "../assets/medications.png";
import { Layout } from "antd";
import dayjs from 'dayjs';

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

  const filteredCurrentData = medicine.filter((item) => {
    return item.end_date === null;
  });

  const currentData = filteredCurrentData.map((item) => {
    const readableStartDate = dayjs(item.start_date).format('DD/MM/YYYY');
    let readableEndDate = "";
    if (item.end_date !== null) {
      readableEndDate = dayjs(item.end_date).format('DD/MM/YYYY');
    } else {
      readableEndDate = "N/A"
    }
    return {
      ...item,
      key: item.key,
      readableStartDate,
      readableEndDate
    }
  })

  const filteredPriorData = medicine.filter((item) => {
    return item.end_date !== null;
  });

  const priorData = filteredPriorData.map((item) => {
    const readableStartDate = dayjs(item.start_date).format('DD/MM/YYYY');
    let readableEndDate = "";
    if (item.end_date !== null) {
      readableEndDate = dayjs(item.end_date).format('DD/MM/YYYY');
    } else {
      readableEndDate = "N/A"
    }

    return {
      ...item,
      key: item.key,
      readableStartDate,
      readableEndDate
    }
  })

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
