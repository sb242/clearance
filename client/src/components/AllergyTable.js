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
    render: (text) => String(text),
  },
  {
    title: "Sensitivity",
    dataIndex: "sensitivity",
    render: (text) => String(text),
  },
  {
    title: "Intolerance",
    dataIndex: "intolerance",
    render: (text) => String(text),
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
      <Table
        rowKey="id"
        columns={columns}
        dataSource={props.allergies}
        size="middle"
      />
    </div>
  );
}

export default AllergyTable;
