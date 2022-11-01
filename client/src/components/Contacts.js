import ContactsTable from "./ContactsTable";
import contactsImage from "../assets/undraw_doctors.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Layout, Form, Input } from "antd";
import "antd/dist/antd.css";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const onFinish = (values) => {
    values.patient_id = 1;
    return addContact(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed to submit form:", errorInfo);
  };

  const fetchContacts = function () {
    return axios.get("/contacts?patientID=1").then((res) => {
      return setContacts(res.data.contacts);
    });
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const addContact = function (values) {
    return axios.post("/contacts", values).then((res) => {
      return fetchContacts();
    });
  };

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
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Health Professional"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input a health professional",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Phone number" name="phone_number">
            <Input />
          </Form.Item>
          <Form.Item label="Specialty" name="specialty">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="address">
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <ContactsTable contacts={contacts} />
      </div>
    </Layout>
  );
}

export default Contacts;
