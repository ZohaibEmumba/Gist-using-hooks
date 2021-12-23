import React, { useState, useEffect, useContext, useCallback } from "react";
import { FormDiv, Heading } from "../create-gist-form/style";
import { updateAGist, getGistObj } from "../../utils/fetchAPIs";
import { GistContext } from "../../context/GistContext";
import { Form, Input, Button } from "antd";

const EditAGist = () => {
  const [gistData, setGistData] = useState("");
  const { state, dispatch } = useContext(GistContext);
  const { gistID } = state;

  const editGist = useCallback(async () => {
    const { description } = gistData;
    await updateAGist(gistID, description);
    dispatch({
      type: "VISIBLESCREEN",
      payload: {
        tab: 3,
        gistID: null,
      },
    });
  }, [updateAGist]);

  const getAGist = useCallback(async () => {
    const resp = await getGistObj(gistID);
    setGistData(resp);
  }, [gistData]);

  const handleInputChange = (e) => setGistData({ description: e.target.value });

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
              onChange={handleInputChange}
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
