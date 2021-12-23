import { StarOutlined, ForkOutlined } from "@ant-design/icons/lib/icons";
import { Table } from "antd";
import React, { useState, useEffect, useContext, useCallback } from "react";
import { GistContext } from "../../context/GistContext";
import { getStaredGists } from "../../utils/fetchAPIs";
import Loader from "../common/spinner/Spinner";
import { UserNameSection, Img, Username } from "../common/table/style";
import { Section } from "./style";

const columns = [
  {
    key: "1",
    title: "Name",
    dataIndex: "owner",
    sorter: true,
    render: (owner) => {
      return (
        <UserNameSection>
          <span>
            {" "}
            <Img src={owner?.avatar_url} alt="Profile Pics" />
          </span>
          <Username>{owner?.login}</Username>
        </UserNameSection>
      );
    },
    width: "20%",
  },
  {
    key: "2",
    title: "Date",
    dataIndex: "created_at",
    width: "20%",
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
    title: "Notebok Name",
    dataIndex: "description",
  },
  {
    key: "6",
    title: "Actions",
    dataIndex: "",
    render: () => {
      <div>
        <StarOutlined />
        <ForkOutlined />
      </div>;
    },
  },
];

const StaredGists = () => {
  const [staredGists, setStaredGists] = useState([]);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(GistContext);

  const getStared = useCallback(async () => {
    setLoading(true);
    let resp = await getStaredGists();
    setStaredGists(resp);
    setLoading(false);
  }, [staredGists]);

  const showUniqueGistRecord = useCallback(
    (id) => {
      dispatch({
        type: "VISIBLESCREEN",
        payload: {
          tab: 9,
          gistID: id,
        },
      });
    },
    [dispatch]
  );

  useEffect(() => {
    getStared();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Section>
          <Table
            rowKey={(record) => record?.id}
            columns={columns}
            dataSource={[...staredGists]}
            rowSelection
            onRow={(record) => {
              return { onClick: () => showUniqueGistRecord(record?.id) };
            }}
          />
        </Section>
      )}
    </>
  );
};

export default StaredGists;
