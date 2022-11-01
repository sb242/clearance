import ContactsTable from "./ContactsTable";
import contactsImage from "../assets/undraw_doctors.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Layout, Form, Input } from "antd";
import "antd/dist/antd.css";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = function () {
    return axios.get("/contacts?patientID=1").then((res) => {
      return res.data.contacts;
    });
  };

  useEffect(() => {
    fetchContacts().then((data) => {
      setContacts(data);
    });
  }, []);

  // const addContact = function () {
  //   return axios.post("/contacts?patientID=1", {name: hpsname, phone_number: number, specialty: specialty, email: email, address: address}).then((res) => {
  //     return res.data.contacts;
  //   });
  // };

  // useEffect(() => {
  //   addContact().then((data) => {
  //     setContacts(data);
  //   });
  // }, []);

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

        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Health Professional"
            name="hps-name"
            rules={[
              {
                required: true,
                message: "Please input a health professional",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone number"
            name="hps-number"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Specialty"
            name="hps-specialty"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="hps-email"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Address"
            name="hps-address"
          >
            <Input />
          </Form.Item>
        </Form>

        <br></br>
        <ContactsTable contacts={contacts} />
      </div>
    </Layout>
  );
}

export default Contacts;
