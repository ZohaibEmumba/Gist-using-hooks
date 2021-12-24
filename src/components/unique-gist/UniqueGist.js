import React, { useState, useContext, useEffect, useCallback } from "react";

import {
  Div,
  Section,
  ContentBody,
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
import { ExclamationCircleOutlined } from "@ant-design/icons";
import ProfileSection from "./ProfileSection";
import FileContent from "./FileContent";

const { confirm } = Modal;

const UniqueGist = () => {
  const [uniqueData, setUniqueData] = useState([]);
  const [gistStarValue, setGistStarValue] = useState(0);
  const [gistForkValue, setGistForkValue] = useState(0);
  const { state, dispatch } = useContext(GistContext);
  const { tab, gistID } = state;
  let filename;

  
  const getGistData = async () => {
    const resp = await getPublicGist(gistID);
    setUniqueData(resp);
  };

  const starThisGist = async () => {
    if (gistStarValue === 0) {
      await staredAGist(gistID)
        .then(() => setGistStarValue(gistStarValue + 1))
        .catch((err) => err);
    } else {
      await unStaredAGist(gistID)
        .then(() => setGistStarValue(gistStarValue - 1))
        .catch((err) => err);
    }
  };

  const forkThisGist = async () => {
    let alreadyFork = 0;
    await forkedGist(gistID)
      .then(() => (alreadyFork = 1))
      .catch(() => alreadyFork);
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

  const updateGist = useCallback((id) => {
    dispatch({
      type: "VISIBLESCREEN",
      payload: {
        tab: 11,
        gistID: id,
      },
    });
  },[dispatch]);

  const checkGist = useCallback(() => {
    checkGistStared(gistID).then(() => setGistStarValue(1));
  },[checkGistStared]);

  useEffect(() => {
    getGistData();
    checkGist();
  }, []);

  return (
    <Div>
      <Section>
            <ProfileSection  
            data={uniqueData} 
            filename={filename}  
            updateGist={updateGist}  
            deleteGist={deleteGist}
            starThisGist={starThisGist}
            forkThisGist={forkThisGist}
            gistStarValue={gistStarValue}  
            gistForkValue={gistForkValue}
            />
      </Section>
      <ContentBody>
            <FileContent 
            filename={filename}
            uniqueData={uniqueData}
            />
      </ContentBody>
    </Div>
  );
};

export default UniqueGist;
