import React, { useState, useEffect, useContext } from "react";
import {
  loginAuthUser,
  privateGistsRecord,
} from "../../utils/fetchAPIs";
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
  ProfileImage,
  Img,
  Span1,
} from "./style";
import { Span, SpanValues, Icon } from "../unique-gist/style";
import { UserName, NoContent } from "../../constants/Constants";

const GitHubProfilePage = () => {
  const [authUserRecord, setAuthUserRecord] = useState();
  const [gists, setGists] = useState("");

  const getLoginData = async () => {
    let authData = await loginAuthUser(UserName);
    setAuthUserRecord(authData);
  };
  const getGists = async () => {
    const resp = await privateGistsRecord();
    setGists(resp);
  };

  const { files } = gists;
  let filename;
  let content;
  let myContentArray;

  if (files !== undefined) {
    Object.values(files).map((file) => {
      filename = file.filename;
      content = file.content;
    });
    myContentArray = content.split("\n");
  }

  const UserBodyContent = myContentArray
    ? myContentArray?.map((content, index) => {
        return (
          <span>
            <p>
              <Span1>{++index}</Span1> {content}
            </p>
          </span>
        );
      })
    : NoContent;

  useEffect(() => {
    getLoginData();
    getGists();
    checkGist();
  }, []);

  return (
    <>
      <Section>
        <ProlfieLeft>
          <ProfilePicSec>
            <ProfileImage
              id="profile-pic"
              src={authUserRecord?.avatar_url}
              alt="zohaib"
            />
          </ProfilePicSec>
          <Heading>
            <h5>{authUserRecord?.login}</h5>
          </Heading>
          <Button>View GitHub Profile</Button>
        </ProlfieLeft>

        <CardSection>
          {gists &&
            gists.map((item, index) => (
              <CardHeader key={index}>
                <LeftSec>
                  <ProfileCol>
                    <Img src={item?.owner?.avatar_url} alt="profile" />
                    <div>
                      <span>
                        <h4>
                          {item?.owner?.login}/{Object.keys(item?.files)[0]}
                        </h4>
                        <span>{item?.created_at}</span>
                        <br />
                      </span>
                    </div>
                  </ProfileCol>
                  <GistIcons>
                    <Icon1>
                      <Span>
                        <Icon className={starType} />
                        Star
                      </Span>
                      <SpanValues>0</SpanValues>
                    </Icon1>
                    <Icon1>
                      <Span>
                        <Icon className="fas fa-code-branch" /> Fork
                      </Span>
                      <SpanValues>0</SpanValues>
                    </Icon1>
                  </GistIcons>
                </LeftSec>

                <ContentBody>
                  <CardBody>
                    <i className="fas fa-code" />
                    <span>{Object.keys(item?.files)[0]}</span>
                  </CardBody>
                  <CardBodyContent>{UserBodyContent}</CardBodyContent>
                </ContentBody>
              </CardHeader>
            ))}
        </CardSection>
      </Section>
    </>
  );
};

export default GitHubProfilePage;
