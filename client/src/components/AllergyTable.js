import { Table, Button } from "antd";

const columns = [
  {
    title: "Type",
    dataIndex: "type",
  },
  {
    title: "Anaphylactic",
    dataIndex: "anaphylactic",
  },
  {
    title: "Sensitivty",
    dataIndex: "sensitivity",
  },
  {
    title: "Intolerance",
    dataIndex: "intolerance",
  },
  {
    title: "Actions",
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

function AllergyTable(props) {
  return (
    <div>
      <Table columns={columns} dataSource={props.allergies} size="middle" />
    </div>
  );
}

export default AllergyTable;
