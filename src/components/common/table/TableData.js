import React, { useState, useEffect } from "react";
import { publicGistsRecord } from "../../../utils/fetchAPIs";
import { Table, Th, Td, UserNameSection, Username, Img } from "./style";

const TableData = () => {
  const [publicGists, setPublicGists] = useState([]);
  const date = new Date("2021-01-09T14:56:23");

  useEffect(() => {
    publicGistsRecord().then((data) => setPublicGists(data));
    console.log(publicGists);
  }, []);
  return (
    <>
      <section>
        <Table>
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
            {publicGists.map((gist, index) => (
              <tr
                key={index}
                // onClick={() => {
                //   showUniqueGistRecord(gist?.id);
                // }}
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
            ))}
          </tbody>
        </Table>
      </section>
    </>
  );
};
export default TableData;
