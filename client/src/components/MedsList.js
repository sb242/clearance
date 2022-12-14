import MedsListItem from "./MedsListItem";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import medicationsImage from "../assets/medications.svg";
import { Layout } from "antd";
import dayjs from "dayjs";

export default function MedsList() {
  const [medicine, setMedicine] = useState([]);

  const fetchMedicine = async () => {
    const data = await axios("/medications");
    setMedicine(data.data);
  };

  useEffect(() => {
    fetchMedicine();
  }, []);

  const filteredCurrentData = medicine.filter((item) => {
    return item.end_date === null;
  });

  const currentData = filteredCurrentData.map((item) => {
    const readableStartDate = dayjs(item.start_date).format("DD/MM/YYYY");
    let readableEndDate = "";
    if (item.end_date !== null) {
      readableEndDate = dayjs(item.end_date).format("DD/MM/YYYY");
    } else {
      readableEndDate = "N/A";
    }
    return {
      ...item,
      key: item.key,
      readableStartDate,
      readableEndDate,
    };
  });

  const filteredPriorData = medicine.filter((item) => {
    return item.end_date !== null;
  });

  const priorData = filteredPriorData.map((item) => {
    const readableStartDate = dayjs(item.start_date).format("DD/MM/YYYY");
    let readableEndDate = "";
    if (item.end_date !== null) {
      readableEndDate = dayjs(item.end_date).format("DD/MM/YYYY");
    } else {
      readableEndDate = "N/A";
    }

    return {
      ...item,
      key: item.key,
      readableStartDate,
      readableEndDate,
    };
  });

  return (
    <Layout style={{ marginLeft: 200, padding: 30 }}>
      <div className="meds-page">
        <h2
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          Medications
          <img
            className="medications-photo"
            src={medicationsImage}
            alt="img"
            style={{ width: "20vw", height: "20vw" }}
          />
        </h2>
        <br></br>

        <MedsListItem
          currentData={currentData}
          priorData={priorData}
          setMedicine={setMedicine}
          medicine={medicine}
          fetchMedicine={fetchMedicine}
        />
      </div>
    </Layout>
  );
}
