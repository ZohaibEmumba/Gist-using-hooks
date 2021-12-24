import React, { useContext } from "react";
import { GistContext } from "../../../context/GistContext";
import { Span1 } from "./style";
import { Row } from "antd";
import PublicGistsGrid from "./PublicGistsGrid";
import PrivateGistsGrid from "./PrivateGistsGrid";

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

  const showUniqueGistRecord = id => {
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
        {publicGistsDisplay ? (
          <PublicGistsGrid
            publicGistsDisplay={publicGistsDisplay}
            showUniqueGistRecord={showUniqueGistRecord}
            publicFiles={publicFiles}
          />
        ) : (
          <PrivateGistsGrid
            privateGistsDisplay={privateGistsDisplay}
            showUniqueGistRecord={showUniqueGistRecord}
            privateFiles={privateFiles}
          />
        )}
      </Row>
    </>
  );
};

export default GridDisplay;
