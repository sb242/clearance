import { Table, Button, Form, DatePicker, Input, Select, Modal } from 'antd';
import React, { useState, useEffect } from "react";
import axios from 'axios';

const columns = [
  {
    title: 'Name',
    dataIndex: 'med_name',
  },
  {
    title: 'Purpose',
    dataIndex: 'purpose',
  },
  {
    title: 'Dosage',
    dataIndex: 'dosage_number',
  },
  {
    title: 'Units',
    dataIndex: 'dosage_unit',
  },
  {
    title: 'Frequency',
    dataIndex: 'frequency',
  },
  {
    title: 'Contact',
    // modify the data index so it pulls the name
    dataIndex: 'hp_name',
  },
  {
    title: 'Start date',
    dataIndex: 'readableStartDate',
  },
  {
    title: 'End date',
    dataIndex: 'readableEndDate',
  },
  {
    title: 'Actions',
    render: (_, record) => {
      return (
        <>
          <Button type="link">Edit</Button>
          <Button type="link">Delete</Button>
        </>
      );
    },
  },
];



const renderInputField = (name, label, placeholder, min) =>
  <Form.Item
    name={name}
    label={label}
    rules={[
      {
        required: true,
        message: "This field is required"
      },
      {
        whitespace: true,
        message: "This field is required"
      },
      {
        min: min,
        message: `Please enter at least ${min} characters`
      }
    ]}
    hasFeedback
  >
    <Input placeholder={placeholder} />
  </Form.Item>

export default function MedsListItem(props) {

  const [loading, setLoading] = useState([]);
  const [open, setOpen] = useState(false);

  // function to set open to true when button clicked, which will allow the new medication form to render

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 500);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    addMedicine(values);
    // reset form fields upon submission
    form.resetFields();
  }

  // Function to add a new medicine to database for user, and update state triggering new GET request to render updated meds list
  const addMedicine = async (values) => {
    // values generated by submission of ant design form
    const result = await axios.put("/medications", { data: values });
    if (result.data === 'successful') {
      // get request to re-render medications list, updating state similar to GET in MedsList.js
      const response = await axios.get("/medications");
      props.setMedicine(response.data)
    }
  };

  // add a function to make an axios GET request to the backend to fetch contact name and id
  // return those values as an array of objects
  // store in state

  const [form] = Form.useForm();

  return (
    <span>
      <div >
        <Table columns={columns} dataSource={props.currentData} size="middle" />
      </div>
      <Button size="large" type="primary" onClick={showModal}>
        Add New Medication
      </Button>
      <Modal
        title="Add new medication"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button size="large" key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            size="large"
            form="medicationsForm"
            key="submit"
            type="primary"
            // loading={loading} => remove loading as button was stuck in loading state, could not submit form
            onClick={handleOk}
            htmlType="submit"
          >
            Submit
          </Button>,
        ]}
      >
        <Form
          id="medicationsForm"
          form={form}
          initialValues={{
            remember: true,
          }}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          onFinish={onFinish}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
          autoComplete="off"
        >
          {renderInputField("med_name", "Name", "Type the name of your medication, e.g. Advil", 3)}
          {renderInputField("purpose", "Purpose", "Enter medication's purpose, e.g. Pain relief", 2)}
          {renderInputField("dosage_number", "Dosage", "Enter number of units, e.g. 3")}
          {renderInputField("dosage_unit", "Units", "Enter medication units, e.g. mg")}
          {renderInputField("frequency", "Frequency", "Enter how often you take your medication, e.g. Daily")}
          <Form.Item hasFeedback name="hp_id" label="Contact"
            rules={[
              {
                required: true,
                message: "This field is required"
              }
            ]}
          >
            {/* Use contact ID placeholders for now, update with contact name */}
            <Select placeholder="Select medication contact">
              {/* map through the contacts here to return Select.Option similar to below format */}
              <Select.Option value={1}>Dr. Michael Smith</Select.Option>
              <Select.Option value={2}>Dr. Spencer Tree</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item hasFeedback name="readableStartDate" label="Start Date"
            rules={[
              {
                required: true,
                message: "This field is required"
              }
            ]}>
            <DatePicker style={{ width: "100%" }} picker='date' placeholder="Select Date" />
          </Form.Item>
          <Form.Item hasFeedback name="readableEndDate" label="End Date">
            <DatePicker style={{ width: "100%" }} picker='date' placeholder="Select Date" />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 30 }}>
          </Form.Item>
        </Form>
      </Modal>
      <h3>Prior</h3>
      <div>
        <Table columns={columns} dataSource={props.priorData} size="middle" />
      </div>
    </span >
  );
}
