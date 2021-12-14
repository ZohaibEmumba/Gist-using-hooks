import React from "react";
import {
  Section,
  ProlfieLeft,
  Button,
  Heading,
  CardSection,
  CardHeader,
  ProfileCol,
  LeftSec,
  GistIcons,
  ContentBody,
  CardBody,
  CardBodyContent,
  Icon1,
  ProfilePicSec,

} from "./style";

function GitHubProfilePage() {
  return (
    <>
      <Section>
        <ProlfieLeft>
          <ProfilePicSec>
            <img id="profile-pic" src="" alt="zohaib" />
          </ProfilePicSec>
          <Heading>
            <h5>Muhammad Zohaib</h5>
          </Heading>
          <Button>View GitHub Profile</Button>
        </ProlfieLeft>

        <CardSection>
          <CardHeader>
            <LeftSec>
              <ProfileCol>
                <img src="" alt="profile" className="profile-pic" />
                <div>
                  <span>
                    <h4>Muhammad Zohaib</h4>
                    <span>Created 7 housrs Ago</span>
                    <br />
                    <span> Broadcast Server</span>
                  </span>
                </div>
              </ProfileCol>
              <GistIcons>
                <Icon1>
                  <span style={{ color: "lightblue" }}>
                    <i className="far fa-star"></i> Star
                  </span>
                  <span
                    style={{
                      border: "1px solid gray",
                      padding: "0px 15px",
                      borderRadius: "5px",
                    }}
                  >
                    0
                  </span>
                </Icon1>
                <Icon1>
                  <span style={{ color: "lightblue" }}>
                    <i
                      className="fas fa-code-branch"
                      style={{ color: "lightblue" }}
                    ></i>{" "}
                    Fork
                  </span>
                  <span
                    style={{
                      border: "1px solid gray",
                      padding: "0px 15px",
                      borderRadius: "5px",
                    }}
                  >
                    0
                  </span>
                </Icon1>
              </GistIcons>
            </LeftSec>

            <ContentBody>
              <CardBody>
                <i className="fas fa-code"></i>
                <span className="file-name">Package.json</span>
              </CardBody>
              <CardBodyContent>
                <span>
                  {" "}
                  <p>
                    <span
                      style={{
                        fontWeight: "700",
                        marginRight: "10px",
                      }}
                    ></span>{" "}
                  </p>{" "}
                </span>
              
              </CardBodyContent>
            </ContentBody>
          </CardHeader>
        </CardSection>
      </Section>
    </>
  );
}

export default GitHubProfilePage;
