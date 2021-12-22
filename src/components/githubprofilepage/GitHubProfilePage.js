import React, { useState, useEffect, useContext } from "react";
import {
  loginAuthUser,
  privateGistsRecord,
  checkGistStared,
  staredAGist,
  unStaredAGist,
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
import { GistContext } from "../../context/GistContext";

const GitHubProfilePage = () => {
  const [authUserRecord, setAuthUserRecord] = useState();
  const [gists, setGists] = useState("");
  const [gistStarValue, setGistStarValue] = useState(0);
  const userName = "Zohaibkhattak15";
  const starType = gistStarValue === 0 ? "far fa-star" : "fas fa-star";

  const { state, dispatch } = useContext(GistContext);
  const { tab, gistID } = state;

  const getLoginData = async () => {
    let authData = await loginAuthUser(userName).then((data) =>
      setAuthUserRecord(data)
    );
  };
  const getGists = async () => {
    const getAuthGists = await privateGistsRecord().then((data) =>
      setGists(data)
    );
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

  const starThisGist = async () => {
    if (gistStarValue === 0) {
      const star = await staredAGist(gistID)
        .then((data) => setGistStarValue(gistStarValue + 1))
        .catch((err) => err);
    } else {
      const unStar = await unStaredAGist(gistID)
        .then((data) => setGistStarValue(gistStarValue - 1))
        .catch((err) => err);
    }
  };

  const checkGist = () => {
    checkGistStared(gistID).then((data) => setGistStarValue(1));
  };

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
                        <span>Created 7 housrs Ago</span>
                        <br />
                        <span> Broadcast Server</span>
                      </span>
                    </div>
                  </ProfileCol>
                  <GistIcons>
                    <Icon1>
                      <Span>
                        <Icon
                          className={starType}
                          onClick={() => starThisGist()}
                        />
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
                    <i className="fas fa-code"></i>
                    <span>{Object.keys(item?.files)[0]}</span>
                  </CardBody>
                  <CardBodyContent>
                    {myContentArray
                      ? myContentArray?.map((content, index) => {
                          return (
                            <span>
                              <p>
                                <Span1>{++index}</Span1> {content}
                              </p>
                            </span>
                          );
                        })
                      : "No Content There......."}
                  </CardBodyContent>
                </ContentBody>
              </CardHeader>
            ))}
        </CardSection>
      </Section>
    </>
  );
};

export default GitHubProfilePage;
