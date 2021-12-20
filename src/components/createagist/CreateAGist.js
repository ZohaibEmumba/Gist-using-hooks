import React, { useState, useContext } from "react";
import { FormDiv, Heading } from "./style";
import { createAGist } from "../../utils/fetchAPIs";
import { GistContext } from "../../context/GistContext";
import { Form, Input, Select, Button } from "antd";

const { TextArea } = Input;
const { Option } = Select;

const CreateAGist = () => {
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState("");
  const [content, setContent] = useState("");
  const [privacy, setPrivacy] = useState(null);

  const { dispatch } = useContext(GistContext);
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
      payload: {
        tab: 3,
        gistID: null,
      },
    });
  };

  return (
    <FormDiv>
      <Form onFinish={creatGist} autoComplete="off">
        <Heading className="create-gist-heading">Create A Gist</Heading>
        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your description!",
            },
          ]}
        >
          <Input
            size="large"
            placeholder="Enter gist Discription..."
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="filename"
          rules={[
            {
              required: true,
              message: "Please input your filename!",
            },
          ]}
        >
          <Input
            type="text"
            placeholder="Enter File name..."
            onChange={(e) => setFileName(e.target.value)}
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="content"
          rules={[
            {
              required: true,
              message: "Please input your content!",
            },
          ]}
        >
          <TextArea
            rows={4}
            placeholder="Enter File Content..."
            onChange={(e) => setContent(e.target.value)}
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Select
            size="large"
            onChange={(value) => {
              if (value === "public") {
                setPrivacy(false);
              } else if (value === "private") {
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
        </Form.Item>

        <Form.Item>
          <Button size="large" htmlType="submit">
            {" "}
            Create Gist{" "}
          </Button>
        </Form.Item>
      </Form>
    </FormDiv>
  );
};

export default CreateAGist;
