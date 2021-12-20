import React, { useContext } from "react";
import { GistContext } from "../../../context/GistContext";
import {

  Footer,
  Grid,
  ProfileFooter,
  Profile,
  ProfilePic,
  Span1,
} from "./style";
import { Row, Col } from "antd";

const GridDisplay = ({ publicGistsDisplay, privateGistsDisplay }) => {
  const { dispatch } = useContext(GistContext);
  let publicFiles;
  let privateFiles;
  if (publicGistsDisplay) {
    publicFiles = publicGistsDisplay.map(
      (files) => Object.keys(files.files)[0]
    );
  } else
    privateFiles = privateGistsDisplay.map(
      (files) => Object.keys(files.files)[0]
    );

  const showUniqueGistRecord = (id) => {
    dispatch({
      type: "VISIBLESCREEN",
      payload: {
        tab: 9,
        gistID: id,
      },
    });
  };

  return (
    <>
      <Row gutter={[16, 100]}>
        {publicGistsDisplay
          ? publicGistsDisplay.map((gist, index) => (
              <Col xs={{ span: 12, offset: 1 }} lg={{ span: 6, offset: 1 }}  key={index}>
                <Grid
                  onClick={() => {
                    showUniqueGistRecord(gist?.id);
                  }}
                >
                  <div>
                    {publicFiles &&
                      publicFiles?.map((content, index) => {
                        return (
                          <span key={index}>
                            {" "}
                            <p>
                              <Span1>{++index}</Span1> {content}{" "}
                            </p>{" "}
                          </span>
                        );
                      })}
                  </div>
                  <Footer>
                    <div>
                      <ProfilePic src={gist.owner.avatar_url} alt="profile" />
                    </div>
                    <Profile>
                      <ProfileFooter>
                        <h4>
                          {gist.owner.login} / {Object.keys(gist.files)[0]}{" "}
                        </h4>
                        <span>Created 7 housrs Ago</span>
                        <br />
                        <span> Broadcast Server</span>
                      </ProfileFooter>
                    </Profile>
                  </Footer>
                </Grid>
              </Col>
            ))
          : privateGistsDisplay.map((gist, index) => (
            <Col xs={{ span: 12, offset: 1 }} lg={{ span: 6, offset: 1 }}  key={index}>
              <Grid
                key={index}
                onClick={() => {
                  showUniqueGistRecord(gist?.id);
                }}
              >
                <div>
                  {privateFiles &&
                    privateFiles?.map((content, index) => {
                      return (
                        <span key={index}>
                          {" "}
                          <p>
                            <Span1>{++index}</Span1> {content}{" "}
                          </p>{" "}
                        </span>
                      );
                    })}
                </div>
                <Footer>
                  <div>
                    <ProfilePic src={gist.owner.avatar_url} alt="profile" />
                  </div>
                  <Profile>
                    <ProfileFooter>
                      <h4>
                        {gist.owner.login} / {Object.keys(gist.files)[0]}{" "}
                      </h4>
                      <span>Created 7 housrs Ago</span>
                      <br />
                      <span> Broadcast Server</span>
                    </ProfileFooter>
                  </Profile>
                </Footer>
              </Grid>
              </Col>
            ))}
      </Row>
    </>
  );
};

export default GridDisplay;
