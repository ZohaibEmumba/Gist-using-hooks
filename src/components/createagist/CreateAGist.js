import React, { useState, useContext } from "react";
import { Form, Button, Heading, Input, Textarea, Select } from "./style";
import { createAGist } from "../../utils/fetchAPIs";
import { GistContext } from "../../context/GistContext";

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
      />

      <Input
        type="text"
        placeholder="Enter File name..."
        onChange={(e) => setFileName(e.target.value)}
      />
      <Textarea
        name=""
        rows={4}
        placeholder="Enter File Content..."
        onChange={(e) => setContent(e.target.value)}
      />
      <Select
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
        <option value=""> </option>
        <option value="public"> Public</option>
        <option value="private">Private</option>
      </Select>

      <Button onClick={() => creatGist()}> Create Gist </Button>
    </Form>
  );
};

export default CreateAGist;
