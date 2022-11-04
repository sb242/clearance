import { Table, Button, Form, Input, Radio, Popconfirm } from "antd";
import { DeleteOutlined, EditOutlined, CheckOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import axios from "axios";

function AllergyTable(props) {
  const [editingRow, setEditingRow] = useState(null);
  const [form] = Form.useForm();

  const deleteAllergy = function(allergyID) {
    return axios.delete(`/allergies/${allergyID}`).then((res) => {
      return props.fetchAllergies();
    });
  };

  const handleDelete = (record) => {
    console.log("record:", record);
    deleteAllergy(record.id);
  };

  const editAllergy = async (values) => {
    const result = await axios.put(`/allergies/${editingRow}`, {
      data: values,
      id: editingRow,
    });
    if (result.data === "successful") {
      props.fetchAllergies();
    }
    setEditingRow(null);
  };

  const renderRow = (text, record, name, isRequired) => {
    if (editingRow === record.id) {
      return (
        <Form.Item
          name={name}
          rules={[
            {
              required: { isRequired },
              message: "This field is required",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="true"> true </Radio>
            <Radio value="false"> false </Radio>
          </Radio.Group>
        </Form.Item>
      );
    } else {
      return String(text);
    }
  };

  const columns = [
    {
      title: "Type",
      dataIndex: "type",
      render: (text, record) => {
        if (editingRow === record.id) {
          return (
            <Form.Item
              name="type"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return String(text);
        }
      },
    },
    {
      title: "Anaphylactic",
      dataIndex: "anaphylactic",
      render: (text, record) => renderRow(text, record, "anaphylactic", false),
    },
    {
      title: "Sensitivity",
      dataIndex: "sensitivity",
      render: (text, record) => renderRow(text, record, "sensitivity", false),
    },
    {
      title: "Intolerance",
      dataIndex: "intolerance",
      render: (text, record) => renderRow(text, record, "intolerance", false),
    },
    {
      title: "Actions",
      dataIndex: "operation",
      render: (_, record) => (
        <>
          <Button
            type="link"
            onClick={() => {
              setEditingRow(record.id);
              form.setFieldsValue({
                type: record.type,
                anaphylactic: record.anaphylactic ? "true" : "false",
                sensitivity: record.sensitivity ? "true" : "false",
                intolerance: record.intolerance ? "true" : "false",
              });
            }}
          >
            <EditOutlined />
          </Button>
          <Button type="link" htmlType="submit">
            <CheckOutlined />
          </Button>
          {props.allergies.length >= 1 ? (
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
      ),
    },
  ];
  return (
    <div>
      <Form
        form={form}
        onFinish={(values) => {
          editAllergy(values);
        }}
      >
        <Table
          rowKey="id"
          columns={columns}
          dataSource={props.allergies}
          size="middle"
        />
      </Form>
    </div>
  );
}

export default AllergyTable;
