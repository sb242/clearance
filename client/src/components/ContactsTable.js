import { Table, Button, Popconfirm } from "antd";
import { DeleteOutlined, MailOutlined, EditOutlined } from "@ant-design/icons";
import axios from "axios";

function ContactsTable(props) {
  const deleteContact = function (hpsID) {
    return axios.delete(`/contacts/${hpsID}`).then((res) => {
      return props.fetchContacts();
    });
  };

  const handleDelete = (record) => {
    deleteContact(record.hp_id);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Specialty",
      dataIndex: "specialty",
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Actions",
      dataIndex: "operation",
      render: (_, record) => (
        <>
          <Button type="link">
            <EditOutlined />
          </Button>
          <Popconfirm
            title="Are you sure?"
            onConfirm={() => handleDelete(record)}
          >
            <Button type="link">
              <DeleteOutlined />
            </Button>
          </Popconfirm>
          <Button type="link">
            <MailOutlined />
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={props.contacts}
        size="middle"
      />
    </div>
  );
}

export default ContactsTable;
