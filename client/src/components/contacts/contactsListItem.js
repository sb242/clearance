import { Table, Button } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Specialty',
    dataIndex: 'specialty',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Actions',
    render: (_, record) => {
      return (
        <>
        <Button type="link">Edit</Button>
        <Button type="link">Save</Button>
        </>
      );
    },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    specialty: 'General Practice',
    phone: 1234567,
    email: "yo@hotmail.com",
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'John Brown2',
    specialty: 'General Practice',
    phone: 1234567,
    email: "yo@hotmail.com",
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'John Brown3',
    specialty: 'General Practice',
    phone: 1234567,
    email: "yo@hotmail.com",
    address: 'New York No. 1 Lake Park',
  }
];

function ContactsListItem() {
  return (
    <div>
      <h2>I Am The Contacts List Item</h2>
      <h3>Name: </h3>
      <h3>Specialty: </h3>
      <h3>Phone Number: </h3>
      <h3>Email: </h3>
      <h3>Address: </h3>
      <Table columns={columns} dataSource={data} size="middle" />
    </div>
  );
}

export default ContactsListItem;