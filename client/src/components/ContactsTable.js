import { Table, Button, Popconfirm } from "antd";
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
      title: "operation",
      dataIndex: "operation",
      render: (_, record) =>
        props.contacts.length >= 1 ? (
          <Popconfirm
            title="Are you sure?"
            onConfirm={() => handleDelete(record)}
          >
            <Button type="primary">Delete</Button>
          </Popconfirm>
        ) : null,
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
