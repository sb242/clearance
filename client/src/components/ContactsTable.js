import { Table, Button } from "antd";

//data will eventually be response from api call for contacts, stored in state as data/contacts and passed as prop to Contacts
// const data = [
//   {
//     name: 'John Brown',
//     specialty: 'General Practice',
//     phone_number: 1234567,
//     email: "yo@hotmail.com",
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     name: 'John Brown2',
//     specialty: 'General Practice',
//     phone_number: 1234567,
//     email: "yo@hotmail.com",
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     name: 'John Brown3',
//     specialty: 'General Practice',
//     phone_number: 1234567,
//     email: "yo@hotmail.com",
//     address: 'New York No. 1 Lake Park',
//   }
// ];

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
