import React, { useContext , useCallback} from "react";
import { GistContext } from "../../../context/GistContext";
import { Col, Table, Row } from "antd";
import { Section, UserNameSection, Username, Img } from "./style";
import { StarOutlined, ForkOutlined } from "@ant-design/icons/lib/icons";
import { checkGistStared } from "../../../utils/fetchAPIs";

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
      return (
        <Row gutter={[16, 16]}>
          <Col>
            <StarOutlined style={{ color: "#5acba1" }} />
          </Col>
          <Col>
            <ForkOutlined style={{ color: "#5acba1" }} />
          </Col>
        </Row>
      );
    },
  },
];

const TableData = ({ publicGistsDisplay, privateGistsDisplay }) => {

  const { dispatch } = useContext(GistContext);
  const dataSource = publicGistsDisplay ? [...publicGistsDisplay] : [...privateGistsDisplay];


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
    [dispatch],
  );

  // const checkStarGist = async (id) => {
  //   let value = await checkGistStared(id)
  //     .then((data) => data)
  //     .catch((err) => err);
  //   return value;
  // };

  return (
    <>
      <Section>
        <Table
          rowKey={(record) => record?.id}
          columns={[...columns]}
          dataSource={dataSource}
          rowSelection
          onRow={(record) => {
            return {
              onClick: () => {
                showUniqueGistRecord(record?.id);
              },
            };
          }}
        />
      </Section>
    </>
  );
};
export default TableData;
