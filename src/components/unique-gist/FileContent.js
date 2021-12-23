import React from "react";
import { NoContent } from "../../constants/Constants";
import { CardBody , Icon , Filename , CardBodyContent} from "./style";

const FileContent = ({filename , uniqueData}) => {

    const { files } = uniqueData;
    let content;
    let myContentArray;
  
    if (files) {
      Object.values(files).map((file) => {
        filename = file.filename;
        content = file.content;
      });
      myContentArray = content.split(" \n");
    }
  

    const UserFileContent =
    myContentArray 
      ? myContentArray?.map((content, index) => {
          return (
            <span key={index}>
              <p>
                <span style={{ fontWeight: "700", marginRight: "10px" }}>
                  {++index}
                </span>
                {content}
              </p>
            </span>
          );
        })
      : <p> {NoContent} </p>;
  return (
    <>
      <CardBody>
        <Icon className="fas fa-code" />
        <Filename>{filename}</Filename>
      </CardBody>
      <CardBodyContent>{UserFileContent}</CardBodyContent>
    </>
  );
};

export default FileContent;
