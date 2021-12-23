import React, { useState, useContext, useEffect } from "react";
import { GistIcons, Icon1 } from "../profile/style";

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
  checkGistStared,
} from "../../utils/fetchAPIs";
import { GistContext } from "../../context/GistContext";
import { Modal } from "antd";
import { ExclamationCircleOutlined, DeleteFilled } from "@ant-design/icons";
import { NoContent, UserName } from "../../constants/Constants";

const { confirm } = Modal;

const UniqueGist = () => {
  const [uniqueData, setUniqueData] = useState([]);
  const [gistStarValue, setGistStarValue] = useState(0);
  const [gistForkValue, setGistForkValue] = useState(0);

  const { state, dispatch } = useContext(GistContext);
  const { tab, gistID } = state;

  const { files } = uniqueData;
  let filename;
  let content;
  let myContentArray;

  if (files !== undefined) {
    Object.values(files).map((file) => {
      filename = file.filename;
      content = file.content;
    });
    myContentArray = content.split(" \n");
  }

  const getGistData = async () => {
    const resp = await getPublicGist(gistID);
    setUniqueData(resp);
  };

  const { owner } = uniqueData;

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

  const forkThisGist = async () => {
    let alreadyFork = 0;
    let fork = await forkedGist(gistID)
      .then((data) => (alreadyFork = 1))
      .catch((err) => alreadyFork);
    if (alreadyFork) {
      setGistForkValue(gistForkValue + 1);
    }
  };

  const deleteGist = (id) => {
    confirm({
      title: "Do you Want to delete these Gist?",
      icon: <ExclamationCircleOutlined />,
      content: "",
      onOk() {
        delAGist(id);
        dispatch({
          type: "VISIBLESCREEN",
          payload: {
            tab: 3,
            gistID: null,
          },
        });
      },
      onCancel() {
        dispatch({
          type: "VISIBLESCREEN",
          payload: {
            tab: 9,
            gistID: null,
          },
        });
      },
    });
  };

  const updateGist = (id) => {
    dispatch({
      type: "VISIBLESCREEN",
      payload: {
        tab: 11,
        gistID: id,
      },
    });
  };

  const checkGist = () => {
    checkGistStared(gistID).then((data) => setGistStarValue(1));
  };

  let dispDelandUpdIcons =
    owner?.login === UserName ? (
      <>
        <Span>
          <Icon
            className="far fa-edit"
            onClick={() => updateGist(uniqueData?.id)}
          />
          Edit
        </Span>
        <Span>
          <Icon
            className="far fa-trash-alt"
            onClick={() => deleteGist(uniqueData?.id)}
          />
          Delete
        </Span>
      </>
    ) : null;
  const UserFileContent =
    myContentArray !== undefined
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
      : NoContent;
  const starClass = gistStarValue === 0 ? "far fa-star" : "fas fa-star";

  useEffect(() => {
    getGistData();
    checkGist();
  }, []);

  return (
    <Div>
      <Section>
        <Profile>
          <div>
            <ProfileImage src={owner?.avatar_url} alt="profile" />
          </div>
          <div>
            <span>
              <Heading>
                {owner?.login}/{filename}{" "}
              </Heading>
              <span>{uniqueData?.created_at}</span>
              <br />
            </span>
          </div>
        </Profile>

        <GistIcons>
          {dispDelandUpdIcons}
          <Icon1>
            <Span>
              <Icon className={starClass} onClick={() => starThisGist()} />
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
          <Filename>{filename}</Filename>
        </CardBody>
        <CardBodyContent>{UserFileContent}</CardBodyContent>
      </ContentBody>
    </Div>
  );
};

export default UniqueGist;
