import { Table, Button, Popconfirm, Form, Input } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import axios from "axios";

function ContactsTable(props) {

  const [editingRow, setEditingRow] = useState(null);
  const [form] = Form.useForm();

  const deleteContact = function(hpsID) {
    return axios.delete(`/contacts/${hpsID}`).then((res) => {
      return props.fetchContacts();
    });
  };

  const editContact = async (values) => {
    const result = await axios.put(`/contacts/${editingRow}`, { data: values, id: editingRow });
    if (result.data === 'successful') {
      // get request to re-render medications list, updating state similar to GET in MedsList.js
      props.fetchContacts();
    }
    setEditingRow(null)
  }

  const handleDelete = (record) => {
    deleteContact(record.hp_id);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => {
        if (editingRow === record.hp_id) {
          return (
            <Form.Item
              name='name'
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
      title: "Specialty",
      dataIndex: "specialty",
      render: (text, record) => {
        if (editingRow === record.hp_id) {
          return (
            <Form.Item
              name='specialty'
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
      title: "Phone Number",
      dataIndex: "phone_number",
      render: (text, record) => {
        if (editingRow === record.hp_id) {
          return (
            <Form.Item
              name='phone_number'
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
      title: "Email",
      dataIndex: "email",
      render: (text, record) => {
        if (editingRow === record.hp_id) {
          return (
            <Form.Item
              name='email'
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
      title: "Address",
      dataIndex: "address",
      render: (text, record) => {
        if (editingRow === record.hp_id) {
          return (
            <Form.Item
              name='address'
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>
        }
      }
    },
    //KEEP HERE FOR EDIT AND SEND INFO BUTTONS THAT WILL STILL BE NEEDED!
    // {
    //   title: "Actions",
    //   render: (_, record) => {
    //     return (
    //       <>
    //         <Button type="link">Edit</Button>
    //         <Button type="link">Delete</Button>
    //         <Button type="link">Send Info</Button>
    //       </>
    //     );
    //   },
    // },
    {
      title: "Actions",
      dataIndex: "operation",
      render: (_, record) =>
        <>
          <Button type="link" onClick={() => {
            setEditingRow(record.hp_id)
            form.setFieldsValue({
              name: record.name,
              specialty: record.specialty,
              phone_number: record.phone_number,
              email: record.email,
              address: record.address
            })
          }}>Edit</Button>
          <Button type="link" htmlType='submit'>
            Save
          </Button>
          {props.contacts.length >= 1 ? (
            <Popconfirm
              title="Are you sure?"
              onConfirm={() => handleDelete(record)}
            >
              <Button type="link">
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          ) : null}
        </>
    },
  ];

  return (
    <div>
      <Form form={form}
        onFinish={(values) => {
          editContact(values);
        }}
      >
        <Table
          rowKey="id"
          columns={columns}
          dataSource={props.contacts}
          size="middle"
        />
      </Form>
    </div>
  );
}

export default ContactsTable;
