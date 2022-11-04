import { Table, Button, Popconfirm, Form, Input, DatePicker } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import axios from "axios";

function MedicalTable(props) {

  const [editingRow, setEditingRow] = useState(null);
  const [form] = Form.useForm();

  const deleteMedical = function(medicalID) {
    return axios.delete(`/medical/${medicalID}`).then((res) => {
      return props.fetchMedical();
    });
  };

  const handleDelete = (record) => {
    console.log("record:", record);
    deleteMedical(record.id);
  };

  const editMedical = async (values) => {
    const result = await axios.put(`/medical/${editingRow}`, { data: values, id: editingRow });
    if (result.data === 'successful') {
      // get request to re-render medications list, updating state similar to GET in MedsList.js
      props.fetchMedical();
    }
    setEditingRow(null)
  }

  const columns = [
    {
      title: "Condition",
      dataIndex: "condition",
      render: (text, record) => {
        if (editingRow === record.id) {
          return (
            <Form.Item
              name='condition'
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
      title: "Start date",
      dataIndex: "start_date",
      render: (text, record) => {
        if (editingRow === record.id) {
          return (
            <Form.Item
              name='start_date'
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
      title: "End date",
      dataIndex: "end_date",
      render: (text, record) => {
        if (editingRow === record.id) {
          return (
            <Form.Item
              name='end_date'
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>
        }
      }
    },
    //KEEP HERE FOR REFERENCE TO WAY USED PRIOR TO DELETE
    // {
    //   title: "Actions",
    //   render: (_, record) => {
    //     return (
    //       <>
    //         <Button type="link">
    //           <EditOutlined />
    //         </Button>
    //         <Button type="link">
    //           <DeleteOutlined />
    //         </Button>
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
            setEditingRow(record.id);
            form.setFieldsValue({
              condition: record.condition,
              start_date: record.start_date,
              end_date: record.end_date
            })
          }}>Edit</Button>
          <Button type="link" htmlType='submit'>
            Save
          </Button>
          {props.medical.length >= 1 ? (
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
          editMedical(values);
        }}
      >
        <Table
          rowKey="id"
          columns={columns}
          dataSource={props.medical}
          size="middle"
        />
      </Form>
    </div>
  );
}

export default MedicalTable;
