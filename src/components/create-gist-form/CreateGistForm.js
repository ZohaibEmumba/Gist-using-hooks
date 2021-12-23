import React, { useState, useContext, useCallback } from "react";
import { FormDiv, Heading } from "./style";
import { createAGist } from "../../utils/fetchAPIs";
import { GistContext } from "../../context/GistContext";
import { Form, Input, Select, Button } from "antd";
import { openNotification, formInputRules } from "../../utils/createGistUtilis";

const { TextArea } = Input;
const { Option } = Select;

const CreateAGist = () => {
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState("");
  const [content, setContent] = useState("");
  const [privacy, setPrivacy] = useState(null);

  const { dispatch } = useContext(GistContext);
  const creatGist = useCallback(() => {
    const gistData = {
      description: description,
      public: !privacy,
      files: {
        [fileName]: {
          content: content,
        },
      },
    }
    createAGist(gistData);
    openNotification();
    dispatch({
      type: "VISIBLESCREEN",
      payload: {
        tab: 3,
        gistID: null,
      },
    });
  }, [dispatch]);

  const changeFileName = (e) => {
    setFileName(e.target.value);
  };
  const chnageDescription = (e) => {
    setDescription(e.target.value);
  };
  const changeContent = (e) => {
    setContent(e.target.value);
  };

  const getStatus = (value) => {
    if (value === "public") {
      setPrivacy(false);
    } else if (value === "private") {
      setPrivacy(true);
    } else {
      return privacy;
    }
  };

  return (
    <FormDiv>
      <Form onFinish={creatGist} autoComplete="off">
        <Heading>Create A Gist</Heading>
        <Form.Item
          name="description"
          rules={formInputRules(true, "description")}
        >
          <Input
            size="large"
            placeholder="Enter gist Discription..."
            onChange={chnageDescription}
          />
        </Form.Item>
        <Form.Item name="filename" rules={formInputRules(true, "filename")}>
          <Input
            type="text"
            placeholder="Enter File name..."
            onChange={changeFileName}
            size="large"
          />
        </Form.Item>
        <Form.Item name="content" rules={formInputRules(true, "content")}>
          <TextArea
            rows={4}
            placeholder="Enter File Content..."
            onChange={changeContent}
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Select
            value={privacy}
            size="large"
            onChange={(value) => getStatus(value)}
          >
            <Option value=""> </Option>
            <Option value="public"> Public</Option>
            <Option value="private">Private</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button size="large" htmlType="submit">
            Create Gist
          </Button>
        </Form.Item>
      </Form>
    </FormDiv>
  );
};

export default CreateAGist;
