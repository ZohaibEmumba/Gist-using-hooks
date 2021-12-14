import React, { useState, useEffect } from "react";
import { Table, Radio, Divider } from "antd";
import { publicGistsRecord } from "../../../utils/fetchAPIs";
import "antd/dist/antd.css";

const columns = [
  {
    key: "1",
    title: "Name",
    dataIndex: "owner",
    render: (owner) => `${owner.login}`,
  },
  {
    key: "2",
    title: "Date",
    dataIndex: "created_at",
  },
  {
    key: "3",
    title: "Time",
    dataIndex: "created_at",
  },
  {
    key: "4",
    title: "Keyword",
    dataIndex: "files",
    render: (files) => `${Object.keys(files)[0]}`,
  },
  {
    key: "5",
    title: "Notebook Name",
    dataIndex: "description",
  },
];

const TableData = () => {
  const [publicGists, setPublicGists] = useState([]);

  useEffect(() => {
    publicGistsRecord().then((data) => setPublicGists(data));
    console.log(publicGists);
  }, []);
  return (
    <div>
      <Table columns={columns} dataSource={publicGists} />
    </div>
  );
};
export default TableData;
