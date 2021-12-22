import React, { useState, useEffect, useContext } from "react";
import { FormDiv, Heading } from "../createagist/style";
import { updateAGist, getGistObj } from "../../utils/fetchAPIs";
import { GistContext } from "../../context/GistContext";
import { Form, Input, Button } from "antd";

const EditAGist = () => {
  const [gistData, setGistData] = useState("");
  const { state, dispatch } = useContext(GistContext);
  const { gistID } = state;

  const editGist = async () => {
    const { description } = gistData;
    let val = await updateAGist(gistID, description);
    dispatch({
      type: "VISIBLESCREEN",
      payload: {
        tab: 3,
        gistID: null,
      },
    });
  };

  const getAGist = async () => {
    let gistOBJ = await getGistObj(gistID).then((data) => setGistData(data));
  };

  useEffect(() => {
    getAGist();
  }, []);

  return (
    <section>
      <FormDiv>
        <Form onFinish={editGist}>
          <Heading className="create-gist-heading">
            Update Gist Description
          </Heading>
          <Form.Item>
            <Input
              size="large"
              placeholder="Enter gist Discription..."
              onChange={(e) => setGistData({ description: e.target.value })}
              value={gistData?.description}
            />
          </Form.Item>
          <Form.Item>
            <Button size="large" htmlType="submit">
              Save Gist
            </Button>
          </Form.Item>
        </Form>
      </FormDiv>
    </section>
  );
};

export default EditAGist;
