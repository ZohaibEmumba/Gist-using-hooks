import React from "react";
import { NoContent } from "../../constants/Constants";
import { Td, UserNameSection, Username, Img } from "../common/table/style";

const SearchedData = ({ searchRecordsData, showUniqueGistRecord }) => {
  const date = new Date("2021-01-09T14:56:23");
  return (
    <>
      {searchRecordsData ? (
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
      )}
    </>
  );
};

export default SearchedData;
