import React, { useState, useContext, useEffect } from "react";
import { GistIcons, Icon1 } from "../../githubprofilepage/style";
import TabContext from "../../../context/tabs/TabContext";
import StoreGistIdContext from "../../../context/storeGistId/StoreGistIdContext";
import {
  Div,
  Section,
  Profile,
  ContentBody,
  CardBody,
  CardBodyContent,
  ProfileImage,
  Heading,
  Filename,
  Span,
  SpanValues,
  Icon,
} from "./style";
import {
  getPublicGist,
  delAGist,
  staredAGist,
  unStaredAGist,
  forkedGist,
} from "../../../utils/fetchAPIs";

const UniqueGist = () => {
  const [uniqueData, setUniqueData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gistStarValue, setGistStarValue] = useState(0);
  const [gistForkValue, setGistForkValue] = useState(0);
  const { gistId, setGistId } = useContext(StoreGistIdContext);
  const { setTab } = useContext(TabContext);

  const { files } = uniqueData;
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

  const getGistData = async () => {
    setLoading(true);
    const getGistObj = await getPublicGist(gistId).then((data) => {
      setLoading(false);
      setUniqueData(data);
    });
  };

  const starThisGist = async () => {
    let alreadyStared = 0;

    if (gistStarValue === 0) {
      const star = await staredAGist(gistId)
        .then(data => (alreadyStared = 1))
        .catch(err => alreadyStared);
      setGistStarValue(gistStarValue + 1);
    } else {
      const unStar = await unStaredAGist(gistId)
        .then(data => alreadyStared = 1)
        .catch(err => alreadyStared);
        setGistForkValue(gistStarValue - 1);
    }
  };

  const forkThisGist = async () => {
    let alreadyFork = 0;
    let fork = await forkedGist(gistId)
      .then((data) => (alreadyFork = 1))
      .catch((err) => alreadyFork);
    if (alreadyFork) {
      setGistForkValue(gistForkValue + 1);
    }
  };

  const deleteGist = async () => {
    let delGist = await delAGist(gistId);
    setTab(3);
  };

  const updateGist = (id) => {
    setTab(11);
    setGistId(id);
  };

  useEffect(() => {
    getGistData();
  }, []);

  return (
    <Div>
      <Section>
        <Profile>
          <div>
            <ProfileImage src={uniqueData?.owner?.avatar_url} alt="profile" />
          </div>
          <div className="">
            <span className="">
              <Heading>
                {uniqueData?.owner?.login}/{filename}{" "}
              </Heading>
              <span>Created 7 housrs Ago</span>
              <br />
              <span> Broadcast Server</span>
            </span>
          </div>
        </Profile>

        <GistIcons>
          {uniqueData?.owner?.login === "Zohaibkhattak15" ? (
            <>
              <Span>
                <Icon
                  className="far fa-edit"
                  onClick={() => updateGist(uniqueData?.id)}
                />{" "}
                Edit
              </Span>
              <Span>
                <Icon
                  className="far fa-trash-alt"
                  onClick={() => deleteGist()}
                />{" "}
                Delete
              </Span>
            </>
          ) : null}
          <Icon1>
            <Span>
              <Icon
                className={gistStarValue === 0 ? "far fa-star" : "fas fa-star"}
                onClick={() => starThisGist()}
              />{" "}
              Star
            </Span>
            <SpanValues>{gistStarValue}</SpanValues>
          </Icon1>
          <Icon1>
            <Span>
              <Icon
                className="fas fa-code-branch"
                onClick={() => forkThisGist()}
              />{" "}
              Fork
            </Span>
            <SpanValues>{gistForkValue}</SpanValues>
          </Icon1>
        </GistIcons>
      </Section>
      <ContentBody>
        <CardBody>
          <Icon className="fas fa-code" />
          <Filename>
            {"  "} {filename}{" "}
          </Filename>
        </CardBody>
        <CardBodyContent>
          {myContentArray !== undefined
            ? myContentArray?.map((content, index) => {
                return (
                  <span key={index}>
                    {" "}
                    <p>
                      <span style={{ fontWeight: "700", marginRight: "10px" }}>
                        {++index}
                      </span>{" "}
                      {content}{" "}
                    </p>{" "}
                  </span>
                );
              })
            : "No Content There......."}
        </CardBodyContent>
      </ContentBody>
    </Div>
  );
};

export default UniqueGist;
