import AllergyTable from "./AllergyTable";
import allergyImage from "../assets/allergy.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout, Button, Form, Input, Modal, Radio, Space, Result } from "antd";
import "antd/dist/antd.css";

function Allergies() {
  const [allergies, setAllergies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {};
  const handleCancel = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    values.patient_id = 1;
    addAllergy(values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      form.resetFields();
    }, 1500);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed to submit form:", errorInfo);
  };

  const fetchAllergies = function () {
    return axios.get("/allergies?patientID=1").then((res) => {
      return setAllergies(res.data.allergies);
    });
  };

  useEffect(() => {
    fetchAllergies();
  }, []);

  const addAllergy = function (values) {
    return axios.post("/allergies", values).then((res) => {
      return fetchAllergies();
    });
  };

  return (
    <Layout style={{ marginLeft: 200, padding: 30 }}>
      <div className="allergies-page">
        <h2
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          Allergies
          <img
            className="allergy-photo"
            src={allergyImage}
            alt="img"
            style={{ width: "20vw", height: "20vw" }}
          />
        </h2>
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <Button size="large" type="primary" onClick={showModal}>
            Add New Allergy
          </Button>
          <Modal
            title="Add new allergy details"
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button size="large" key="back" onClick={handleCancel}>
                Cancel
              </Button>,
              <Button
                size="large"
                form="allergyForm"
                key="submit"
                type="primary"
                loading={loading}
                htmlType="submit"
              >
                Submit
              </Button>,
            ]}
          >
            {" "}
            {!loading ? (
              <Form
                id="allergyForm"
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
                  label="Allergy type"
                  name="type"
                  rules={[
                    {
                      required: true,
                      message: "Please input allergy description",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item label="Anaphylactic" name="anaphylactic">
                  <Radio.Group>
                    <Radio value="true"> true </Radio>
                    <Radio value="false"> false </Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="Sensitivity" name="sensitivity">
                  <Radio.Group>
                    <Radio value="true"> true </Radio>
                    <Radio value="false"> false </Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="Intolerance" name="intolerance">
                  <Radio.Group>
                    <Radio value="true"> true </Radio>
                    <Radio value="false"> false </Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                ></Form.Item>
              </Form>
            ) : (
              <Result
                status="success"
                title="Successfully added allergy"
              ></Result>
            )}
          </Modal>
          <AllergyTable fetchAllergies={fetchAllergies} allergies={allergies} />
        </Space>
      </div>
    </Layout>
  );
}

export default Allergies;
