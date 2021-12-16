import React, { useState, useContext } from "react";
import { Form, Button, Heading, Input, Textarea, Select } from "./style";
import { createAGist } from "../../utils/fetchAPIs";
import TabContext from "../../context/tabs/TabContext";

const CreateAGist = () => {
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState("");
  const [content, setContent] = useState("");
  const [privacy, setPrivacy] = useState(null);
  const { setTab } = useContext(TabContext);

  const creatGist = (e) => {
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
    setTab(3);
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
        <option value="public"> Public</option>
        <option value="private">Private</option>
      </Select>

      <Button onClick={() => creatGist()}> Create Gist </Button>
    </Form>
  );
};

export default CreateAGist;
