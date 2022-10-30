import { Table, Button } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
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
    dataIndex: 'hp_id',
  },
  {
    title: 'Start date',
    dataIndex: 'start_date',
  },
  {
    title: 'End date',
    dataIndex: 'end_date',
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




export default function MedsListItem(props) {
  return (
    <span>
      <div>
        <Table columns={columns} dataSource={props.currentData} size="middle" />
      </div>
      <Button size="large" type="primary">Add New Medication</Button>
      <h3>Prior</h3>
      <div>
        <Table columns={columns} dataSource={props.priorData} size="middle" />
      </div>
    </span>
  );
}
