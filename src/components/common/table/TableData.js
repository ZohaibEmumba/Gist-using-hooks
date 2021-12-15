import React from "react";
import {
  Table,
  Th,
  Td,
  UserNameSection,
  Username,
  Img,
  GistIcons,
  Icons,
} from "./style";

const TableData = ({ publicGistsDisplay, privateGistsDisplay }) => {
  const date = new Date("2021-01-09T14:56:23");
  const filledStar = <i className="fas fa-star" />;
  const unFilledStart = <i className="far fa-star" />;

  const showUniqueGistRecord = (id) => {
    console.log(id);
  };

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
                    <Td>
                      <GistIcons>
                        <Icons className="fas fa-star" />
                        <Icons className="fas fa-code-branch" />
                      </GistIcons>
                    </Td>
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
                    <Td id="gists-icons">
                      <i className="fas fa-star" />
                      <i className="fas fa-code-branch"></i>
                    </Td>
                  </tr>
                ))}
          </tbody>
        </Table>
      </section>
    </>
  );
};
export default TableData;
