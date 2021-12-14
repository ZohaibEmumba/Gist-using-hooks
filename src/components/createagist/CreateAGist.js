import { Select } from "antd";
import React from "react";
import { Form, Button, Heading, Input, Textarea } from "./style";

const { Option } = Select;

const CreateAGist = () => {
  return (
    <Form>
      <Heading className="create-gist-heading">Create A Gist</Heading>
      <Input type="text" placeholder="Enter gist Discription..." />

      <Input type="text" placeholder="Enter File name..." />
      <Textarea name="" rows={4} placeholder="Enter File Content..." />
      <Select>
        <Option value="public"> Public</Option>
        <Option value="private">Private</Option>
      </Select>

      <Button> Create Gist </Button>
    </Form>
  );
};

export default CreateAGist;
