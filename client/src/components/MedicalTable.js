import { Table, Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import axios from "axios";

function MedicalTable(props) {
  const deleteMedical = function (medicalID) {
    return axios.delete(`/medical/${medicalID}`).then((res) => {
      return props.fetchMedical();
    });
  };

  const handleDelete = (record) => {
    console.log("record:", record);
    deleteMedical(record.id);
  };

  const columns = [
    {
      title: "Condition",
      dataIndex: "condition",
    },
    {
      title: "Start date",
      dataIndex: "start_date",
    },
    {
      title: "End date",
      dataIndex: "end_date",
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
        props.medical.length >= 1 ? (
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
        dataSource={props.medical}
        size="middle"
      />
    </div>
  );
}

export default MedicalTable;
