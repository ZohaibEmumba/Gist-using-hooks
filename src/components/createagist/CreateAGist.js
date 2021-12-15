import { Select } from "antd";
import React, { useState } from "react";
import { Form, Button, Heading, Input, Textarea } from "./style";
import { createAGist } from "../../utils/fetchAPIs";

const { Option } = Select;

const CreateAGist = () => {
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState("");
  const [content, setContent] = useState("");
  const [privacy, setPrivacy] = useState(null);

  const creatGist = () => {
    e.preventDefault();
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
  };

  return (
    <Form>
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
        <Option value="public"> Public</Option>
        <Option value="private">Private</Option>
      </Select>

      <Button onClick={() => creatGist}> Create Gist </Button>
    </Form>
  );
};

export default CreateAGist;
