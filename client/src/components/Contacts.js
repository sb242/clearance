import ContactsTable from "./ContactsTable";
import contactsImage from "../assets/undraw_doctors.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "antd";
import { Layout } from "antd";
import "antd/dist/antd.css";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = function () {
    /* ---
    Hard coded patient id will need to change
    --- */
    return axios.get("/contacts?patientID=1").then((res) => {
      return res.data.contacts;
    });
  };

  useEffect(() => {
    fetchContacts().then((data) => {
      setContacts(data);
    });
  }, []);

  return (
    <Layout style={{ marginLeft: 200, padding: 30 }}>
      <div className="contacts-page">
        <h2>Health Professionals Contact Information</h2>
        <img
          className="ahp-photo"
          src={contactsImage}
          alt="img"
          width="300px"
        />
        <br></br>
        <Button size="large" type="primary">
          Add New Contact
        </Button>
        <br></br>
        <ContactsTable contacts={contacts} />
      </div>
    </Layout>
  );
}

export default Contacts;
