import React, { useContext, useState } from "react";
import { GistContext } from "../../../context/GistContext";
import { checkGistStared } from "../../../utils/fetchAPIs";
import { Table } from "antd";


import {
  Section,
  UserNameSection,
  Username,
  Img,
 
} from "./style";


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
];

const TableData = ({ publicGistsDisplay, privateGistsDisplay }) => {
  const date = new Date("2021-01-09T14:56:23");
  const { dispatch } = useContext(GistContext);
  const [pagination, setPagination] = useState({
      current  : 1,
      pageSize :  10,
  })

  const filledStar = <i className="fas fa-star" />;
  const unFilledStart = <i className="far fa-star" />;

  const showUniqueGistRecord = (id) => {
    dispatch({
      type: "VISIBLESCREEN",
      payload: {
        tab: 9,
        gistID: id,
      },
    });
  };

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
          rowKey={record => record?.id}
          columns={columns}
          dataSource={publicGistsDisplay ? publicGistsDisplay : privateGistsDisplay}
          rowSelection
          onRow={(record, rowIndex) => {
            return {
              onClick: () => {
                showUniqueGistRecord(record?.id)
              }, 
            };
          }}
          
        />
      </Section>
    </>
  );
};
export default TableData;
