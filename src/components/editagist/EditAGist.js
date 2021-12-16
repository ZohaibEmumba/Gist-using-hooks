import React, { useState, useEffect, useContext } from "react";
import StoreGistIdContext from "../../context/storeGistId/StoreGistIdContext";
import { Form, Input, Button } from "../createagist/style";
import { updateAGist, getGistObj } from "../../utils/fetchAPIs";
import TabContext from "../../context/tabs/TabContext";

const EditAGist = () => {
  const [gistData, setGistData] = useState("");

  const { gistId } = useContext(StoreGistIdContext);
  const { setTab } = useContext(TabContext);

  const editGist = async () => {
    const {description} = gistData;
    let val = await updateAGist(gistId, description);
    setTab(3);
  };

  const getAGist = async () => {
    let gistOBJ = await getGistObj(gistId).then((data) => setGistData(data));
  };

  useEffect(() => {
    getAGist();
  }, []);

  return (
    <section>
      <Form onSubmit={(e) => e.preventDefault()}>
        <h1 className="create-gist-heading">Update Gist Description</h1>
        <Input
          type="text"
          onChange={(e) => setGistData( {description : e.target.value})}
          placeholder="Enter gist Discription..."
          value={gistData?.description}
        />
        <Button onClick={() => editGist()}>Save Gist</Button>
      </Form>
    </section>
  );
};

export default EditAGist;
