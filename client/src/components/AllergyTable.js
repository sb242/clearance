import { Table, Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import axios from "axios";

function AllergyTable(props) {
  const deleteAllergy = function (allergyID) {
    return axios.delete(`/allergies/${allergyID}`).then((res) => {
      return props.fetchAllergies();
    });
  };

  const handleDelete = (record) => {
    console.log("record:", record);
    deleteAllergy(record.id);
  };

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
    //KEEP HERE FOR REFERENCE TO WAY USED PRIOR TO DELETE
    // {
    //   title: "Actions",
    //   render: (_, record) => {
    //     return (
    //       <>
    //         <Button type="link">
    //           <EditOutlined />
    //         </Button>
    //         <Button type="link">
    //           <DeleteOutlined />
    //         </Button>
    //       </>
    //     );
    //   },
    // },
    {
      title: "Actions",
      dataIndex: "operation",
      render: (_, record) =>
        props.allergies.length >= 1 ? (
          <Popconfirm
            title="Are you sure?"
            onConfirm={() => handleDelete(record)}
          >
            <Button type="link">
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        ) : null,
    },
  ];
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
