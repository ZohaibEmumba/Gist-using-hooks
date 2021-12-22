import React, { useState, useContext, useEffect } from "react";
import { GistContext } from "../../context/GistContext";
import { searchRecords } from "../../utils/fetchAPIs";
import { Section } from "./style";
import Spinner from "../common/spinner/Spinner";

import {
  Table,
  Th,
  Td,
  UserNameSection,
  Username,
  Img,
} from "../common/table/style";
import { NoContent } from "../../constants/Constants";
import { Input } from "antd";

const SearchGists = () => {
  const [searchRecordsData, setSearchRecordsData] = useState([]);
  const date = new Date("2021-01-09T14:56:23");
  const { state, dispatch } = useContext(GistContext);
  const [loading, setLoading] = useState(false);

  const { gistID, searchValue } = state;

  const showUniqueGistRecord = (gistID) => {
    dispatch({
      type: "VISIBLESCREEN",
      payload: {
        tab: 9,
        gistID: gistID,
      },
    });
  };

  const getFilterData = () => {
    setLoading(true);
    const resp = searchRecords(searchValue);
    setLoading(false);
    setSearchRecordsData(resp);
  };

  const SearchedUserData = searchRecordsData ? (
    searchRecordsData.map((gist, index) => (
      <tr
        key={index}
        onClick={() => {
          showUniqueGistRecord(gist?.id);
        }}
      >
        <Td>
          <input type="checkbox" />{" "}
        </Td>
        <Td>
          <UserNameSection>
            <span>
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
  ) : (
    <h1>{NoContent}</h1>
  );

  useEffect(() => {
    getFilterData();
  }, []);

  return (
    <Section>
      {loading ? (
        <Spinner />
      ) : (
        <Table>
          <thead>
            <tr>
              <Th>
                <Input type="checkbox" />
              </Th>
              <Th>Name</Th>
              <Th>Date</Th>
              <Th>Time</Th>
              <Th>Keyword</Th>
              <Th>Notebook Name</Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody>{SearchedUserData}</tbody>
        </Table>
      )}
    </Section>
  );
};

export default SearchGists;
