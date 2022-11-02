import MedicalTable from "./MedicalTable";
import medicalImage from "../assets/medical.png";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout, Button, Form, Input, Modal, DatePicker, Space } from "antd";
import "antd/dist/antd.css";

function Medical() {
  const [medical, setMedical] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      form.resetFields();
    }, 1000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    values.patient_id = 1;
    return addMedical(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed to submit form:", errorInfo);
  };

  const fetchMedical = function () {
    return axios.get("/medical?patientID=1").then((res) => {
      return setMedical(res.data.medical);
    });
  };

  useEffect(() => {
    fetchMedical();
  }, []);

  const addMedical = function (values) {
    return axios.post("/medical", values).then((res) => {
      return fetchMedical();
    });
  };

  return (
    <Layout style={{ marginLeft: 200, padding: 30 }}>
      <div className="medical-page">
        <h2
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          Medical History
          <img
            className="medical-photo"
            src={medicalImage}
            alt="img"
            style={{ width: "20vw", height: "20vw" }}
          />
        </h2>
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <Button size="large" type="primary" onClick={showModal}>
            Add New Medical Condition
          </Button>
          <Modal
            title="Add new medical condition details"
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button size="large" key="back" onClick={handleCancel}>
                Cancel
              </Button>,
              <Button
                size="large"
                form="medicalForm"
                key="submit"
                type="primary"
                loading={loading}
                onClick={handleOk}
                htmlType="submit"
              >
                Submit
              </Button>,
            ]}
          >
            <Form
              id="medicalForm"
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              form={form}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Medical condition"
                name="condition"
                rules={[
                  {
                    required: true,
                    message: "Please input medical condition description",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                hasFeedback
                name="start_date"
                label="Start Date"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  picker="date"
                  placeholder="Select Date"
                />
              </Form.Item>
              <Form.Item hasFeedback name="end_date" label="End Date">
                <DatePicker
                  style={{ width: "100%" }}
                  picker="date"
                  placeholder="Select Date"
                />
              </Form.Item>
              <Form.Item wrapperCol={{ span: 30 }}></Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              ></Form.Item>
            </Form>
          </Modal>
          <MedicalTable fetchMedical={fetchMedical} medical={medical} />
        </Space>
      </div>
    </Layout>
  );
}

export default Medical;
