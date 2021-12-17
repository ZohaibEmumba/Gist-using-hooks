import React, { useContext , useState} from "react";
import { GistContext } from "../../../context/GistContext";
import { checkGistStared } from "../../../utils/fetchAPIs";
import { Table } from "antd";

import {
  Section,
  //   Table,
  //   Th,
  //   Td,
  UserNameSection,
  Username,
  Img,
  //   GistIcons,
  //   Icons,
} from "./style";

const columns = [
  {
    key: '1',
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
    key: '2',
    title: "Date",
    dataIndex: "created_at",
    width: "20%",
  },
  {
    key: '3',
    title: "Time",
    dataIndex: "created_at",
  },
  {
    key: '4',
    title: "Keyword",
    dataIndex: "files",
    render: (files) => `${Object.keys(files)[0]}`,
  },
  {
    key: '5',
    title: "Notebok Name",
    dataIndex: "description",
  },
];

const TableData = ({ publicGistsDisplay, privateGistsDisplay }) => {
  const date = new Date("2021-01-09T14:56:23");
  const { dispatch } = useContext(GistContext);


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

  const checkStarGist = async (id) => {
    let value = await checkGistStared(id)
      .then((data) => data)
      .catch((err) => err);
    return value;
  };

  return (
    <>
      <Section>
        <Table 
        columns={columns} 
        dataSource={publicGistsDisplay}
        rowSelection
         />

        {/* <Table>
          <thead>
            <tr>
              <Th>
                <input type="checkbox" />
              </Th>
              <Th>Name</Th>
              <Th>Date</Th>
              <Th>Time</Th>
              <Th>Keyword</Th>
              <Th>Notebook Name</Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody>
            {publicGistsDisplay
              ? publicGistsDisplay.map((gist, index) => (
                  <tr
                    key={index}
                    onClick={() => {
                      showUniqueGistRecord(gist?.id);
                    }}
                  >
                    <Td>
                      {" "}
                      <input type="checkbox" />{" "}
                    </Td>
                    <Td>
                      <UserNameSection>
                        <span>
                          {" "}
                          <Img
                            className="profile-img"
                            src={gist?.owner?.avatar_url}
                            alt="Profile Pics"
                          />
                        </span>
                        <Username>{gist?.owner?.login}</Username>
                      </UserNameSection>
                    </Td>
                    <Td>{date.toLocaleDateString()}</Td>
                    <Td>{date.toLocaleTimeString()}</Td>
                    <Td>{Object.keys(gist?.files)[0]}</Td>
                    <Td>{gist?.description}</Td>
                  </tr>
                ))
              : privateGistsDisplay.map((gist, index) => (
                  <tr
                    key={index}
                    onClick={() => {
                      showUniqueGistRecord(gist?.id);
                    }}
                  >
                    <Td>
                      {" "}
                      <input type="checkbox" />{" "}
                    </Td>
                    <Td>
                      <UserNameSection>
                        <span>
                          {" "}
                          <Img
                            className="profile-img"
                            src={gist?.owner?.avatar_url}
                            alt="Profile Pics"
                          />
                        </span>
                        <Username>{gist?.owner?.login}</Username>
                      </UserNameSection>
                    </Td>
                    <Td>{date.toLocaleDateString()}</Td>
                    <Td>{date.toLocaleTimeString()}</Td>
                    <Td>{Object.keys(gist?.files)[0]}</Td>
                    <Td>{gist?.description}</Td>
                    <Td>
                      <GistIcons>
                         { 
                           checkStarGist(gist?.id),
                           true ? <Icons className="fas fa-star" /> :<Icons className="far fa-star" />}
                        <Icons className="fas fa-code-branch" />
                      </GistIcons>
                    </Td>
                  </tr>
                ))}
          </tbody>
        </Table> */}
      </Section>
    </>
  );
};
export default TableData;
