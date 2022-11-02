import { Table, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

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
    title: "Sensitivity",
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
          <Button type="link">
            <EditOutlined />
          </Button>
          <Button type="link">
            <DeleteOutlined />
          </Button>
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
