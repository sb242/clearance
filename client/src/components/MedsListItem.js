import { Table, Button, Form, Checkbox, DatePicker, Input, Select } from 'antd';

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
          <Button type="link">Delete</Button>
        </>
      );
    },
  },
];



const renderInputField = (name, label, placeholder) =>
  <Form.Item name={name} label={label}>
    <Input placeholder={placeholder} />
  </Form.Item>

export default function MedsListItem(props) {
  return (
    <span>
      <div >
        <Table columns={columns} dataSource={props.currentData} size="middle" />
      </div>
      <Button size="large" type="primary">Add New Medication</Button>
      <Form layout="vertical" labelCol={{ span: 30 }} wrapperCol={{ span: 10 }}>
        {renderInputField("name", "Name", "Type the name of your medication, e.g. Advil")}
        {renderInputField("purpose", "Purpose", "Enter medication's purpose, e.g. Pain relief")}
        {renderInputField("dosage_number", "Dosage", "Enter number of units, e.g. 3")}
        {renderInputField("dosage_unit", "Units", "Enter medication units, e.g. mg")}
        {renderInputField("frequency", "Frequency", "Enter how often you take your medication, e.g. Daily")}
        <Form.Item name="hp_id" label="Contact">
          <Select placeholder="Select medication contact">
            <Select.Option value="contact_one">Dr Jones</Select.Option>
            <Select.Option value="contact_two">Dr Kim</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="start_date" label="Start Date">
          <DatePicker style={{ width: "100%" }} picker='date' placeholder="Select Date" />
        </Form.Item>
        <Form.Item name="end_date" label="End Date">
          <DatePicker style={{ width: "100%" }} picker='date' placeholder="Select Date" />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 30 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <h3>Prior</h3>
      <div>
        <Table columns={columns} dataSource={props.priorData} size="middle" />
      </div>
    </span >
  );
}
