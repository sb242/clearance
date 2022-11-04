import { Table, Button, Form, DatePicker, Input, Select, Modal } from 'antd';
import React, { useState, useEffect } from "react";
import axios from 'axios';

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
  const [editingRow, setEditingRow] = useState(null);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState([]);
  const [open, setOpen] = useState(false);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'med_name',
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item
              name='med_name'
              rules={[{
                required: true,
                message: "This field is required"
              }]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>
        }
      }
    },
    {
      title: 'Purpose',
      dataIndex: 'purpose',
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item
              name='purpose'
              rules={[{
                required: true,
                message: "This field is required"
              }]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>
        }
      }
    },
    {
      title: 'Dosage',
      dataIndex: 'dosage_number',
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item
              name='dosage_number'
              rules={[{
                required: true,
                message: "This field is required"
              }]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>
        }
      }
    },
    {
      title: 'Units',
      dataIndex: 'dosage_unit',
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item
              name='dosage_unit'
              rules={[{
                required: true,
                message: "This field is required"
              }]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>
        }
      }
    },
    {
      title: 'Frequency',
      dataIndex: 'frequency',
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item
              name='frequency'
              rules={[{
                required: true,
                message: "This field is required"
              }]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>
        }
      }
    },
    {
      title: 'Contact',
      dataIndex: 'name',
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item name="hp_id"
              rules={[
                {
                  required: true,
                  message: "This field is required"
                }
              ]}
            >
              <Select>
                <Select.Option value={1}>Dr. Michael Smith</Select.Option>
                <Select.Option value={2}>Dr. Spencer Tree</Select.Option>
                <Select.Option value={3}>Dr. Olivia Azzurra</Select.Option>
                <Select.Option value={4}>Dr. Marjolaine Adelaide</Select.Option>
                <Select.Option value={5}>Dr. Bartel Matthias</Select.Option>
                <Select.Option value={6}>House of Teeth</Select.Option>
                <Select.Option value={7}>Serenity Massage</Select.Option>
                <Select.Option value={8}>Nari Per</Select.Option>
              </Select>
            </Form.Item>);
        } else {
          return <p>{text}</p>
        }
      }
    },
    {
      title: 'Start date',
      dataIndex: 'readableStartDate',
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item name="readableStartDate"
              rules={[
                {
                  required: true,
                  message: "This field is required"
                }
              ]}>
              <DatePicker style={{ width: "100%" }} picker='date' />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>
        }
      }
    },
    {
      title: 'End date',
      dataIndex: 'readableEndDate',
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item name="readableEndDate">
              <DatePicker style={{ width: "100%" }} picker='date' />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>
        }
      }
    },
    {
      title: 'Actions',
      render: (_, record) => {
        return (
          <>
            <Button type="link" onClick={() => {
              setEditingRow(record.key)
              form.setFieldsValue({
                med_name: record.med_name,
                purpose: record.purpose,
                dosage_number: record.dosage_number,
                dosage_unit: record.dosage_unit,
                frequency: record.frequency,
                hp_id: record.hp_id,
                start_date: record.readableStartDate,
                end_date: record.readableEndDate
              })
            }}>Edit</Button>
            <Button type="link" htmlType='submit'>
              Save
            </Button>
            <Button type="link">Delete</Button>
          </>
        );
      },
    },
  ];

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

  const editMedicine = async (values) => {
    // values generated by submission of ant design form
    if (editingRow) {
      const result = await axios.put(`/medications/${editingRow}`, { data: values, id: editingRow });
      if (result.data === 'successful') {
        // get request to re-render medications list, updating state similar to GET in MedsList.js
        const response = await axios.get("/medications");
        props.setMedicine(response.data)
      }
      setEditingRow(null)
    }
    else {
      const result = await axios.post("/medications", { data: values });
      if (result.data === 'successful') {
        // get request to re-render medications list, updating state similar to GET in MedsList.js
        const response = await axios.get("/medications");
        props.setMedicine(response.data)
      }
    }
  };

  return (
    <span>
      <div>
        <Form form={form}
          onFinish={(values) => {
            editMedicine(values);
            // close form
            form.resetFields();
          }}>
          <Table columns={columns} dataSource={props.currentData} size="middle" />
        </Form>
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
            <Select placeholder="Select contact">
              {/* map through the contacts here to return Select.Option similar to below format */}
              <Select.Option value={1}>Dr. Michael Smith</Select.Option>
              <Select.Option value={2}>Dr. Spencer Tree</Select.Option>
              <Select.Option value={3}>Dr. Olivia Azzurra</Select.Option>
              <Select.Option value={4}>Dr. Marjolaine Adelaide</Select.Option>
              <Select.Option value={5}>Dr. Bartel Matthias</Select.Option>
              <Select.Option value={6}>House of Teeth</Select.Option>
              <Select.Option value={7}>Serenity Massage</Select.Option>
              <Select.Option value={8}>Nari Per</Select.Option>
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
        <Form form={form}
          onFinish={(values) => {
            editMedicine(values);
            form.resetFields();
          }}>
          <Table columns={columns} dataSource={props.priorData} size="middle" />
        </Form>
      </div>
    </span >
  );
}
