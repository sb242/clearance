import allergyImage from "../assets/allergy.png";
import { Layout, Button } from "antd";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AllergyTable from "./AllergyTable";

function Allergies() {
  const [allergies, setAllergies] = useState([]);

  const fetchAllergies = function () {
    return axios.get("/allergies?patientID=1").then((res) => {
      return res.data.allergies;
    });
  };

  useEffect(() => {
    fetchAllergies().then((data) => {
      setAllergies(data);
    });
  }, []);

  return (
    <Layout style={{ marginLeft: 200, padding: 30 }}>
      <div className="allergies-page">
        <h2>Allergies</h2>
        <img
          className="allergy-photo"
          src={allergyImage}
          alt="img"
          width="50px"
        />
        <br></br>
        <Button size="large" type="primary">
          Add New Allergy
        </Button>
        <br></br>
        <AllergyTable allergies={allergies} />
      </div>
    </Layout>
  );
}

export default Allergies;
