import { Table, Button } from "antd";

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
    render: (_, record) => {
      return (
        <>
          <Button type="link">Edit</Button>
          <Button type="link">Save</Button>
          <Button type="link">Send Info</Button>
        </>
      );
    },
  },
];

function ContactsTable(props) {
  return (
    <div>
      <Table columns={columns} dataSource={props.contacts} size="middle" />
    </div>
  );
}

export default ContactsTable;
