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
  ProfilePicSec,
  ProfileImage,
} from "./style";
import { GistContext } from "../../context/GistContext";
import { UserName } from "../../constants/Constants";
import CardData from "./CardData";

const GitHubProfilePage = () => {
  const [authUserRecord, setAuthUserRecord] = useState();
  const [gists, setGists] = useState("");
  const [gistStarValue, setGistStarValue] = useState(0);

  const { state } = useContext(GistContext);
  const { tab, gistID } = state;

  const getLoginData = async () => {
    let authResp = await loginAuthUser(UserName);
    setAuthUserRecord(authResp);
  };
  const getGists = async () => {
    const getAuthGistsResp = await privateGistsRecord();
    setGists(getAuthGistsResp);
  };

  const starThisGist = async () => {
    if (gistStarValue === 0) {
      staredAGist(gistID)
        .then(() => setGistStarValue(gistStarValue + 1))
        .catch((err) => err);
    } else {
      await unStaredAGist(gistID)
        .then(() => setGistStarValue(gistStarValue - 1))
        .catch((err) => err);
    }
  };

  const checkGist = () => {
    checkGistStared(gistID).then(() => setGistStarValue(1));
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
          <CardData
            gists={gists}
            gistStarValue={gistStarValue}
            starThisGist={starThisGist}
          />
        </CardSection>
      </Section>
    </>
  );
};

export default GitHubProfilePage;
