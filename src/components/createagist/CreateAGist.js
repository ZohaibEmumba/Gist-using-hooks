import React, { useState, useContext } from "react";
import { Form,  Heading } from "./style";
import { createAGist } from "../../utils/fetchAPIs";
import { GistContext } from "../../context/GistContext";
import { Input , Select , Button } from "antd";

const { TextArea } = Input;
const { Option } = Select;


const CreateAGist = () => {
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState("");
  const [content, setContent] = useState("");
  const [privacy, setPrivacy] = useState(null);

  const {dispatch} = useContext(GistContext);
  const creatGist = () => {
    let gistData = {
      description: description,
      public: !privacy,
      files: {
        [fileName]: {
          content: content,
        },
      },
    };
    createAGist(gistData);
    dispatch({
      type: "VISIBLESCREEN",
      payload : {
        tab : 3 ,
        gistID: null
      }
    })
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Heading className="create-gist-heading">Create A Gist</Heading>
      <Input
        type="text"
        placeholder="Enter gist Discription..."
        onChange={(e) => setDescription(e.target.value)}
        size="large"
      />

      <Input
        type="text"
        placeholder="Enter File name..."
        onChange={(e) => setFileName(e.target.value)}
        size="large"

      />
      <TextArea
        name=""
        rows={4}
        placeholder="Enter File Content..."
        onChange={(e) => setContent(e.target.value)}
        size="large"

      />
      <Select
      size="large"
        onChange={(e) => {
          if (e.target.value === "public") {
            setPrivacy(false);
          } else if (e.target.value === "private") {
            setPrivacy(true);
          } else {
            return privacy;
          }
        }}
      >
        <Option value=""> </Option>
        <Option value="public"> Public</Option>
        <Option value="private">Private</Option>
      </Select>

      <Button size="large" onClick={() => creatGist()}> Create Gist </Button>
    </Form>
  );
};

export default CreateAGist;
