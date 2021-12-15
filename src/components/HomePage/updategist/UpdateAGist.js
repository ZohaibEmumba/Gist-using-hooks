import React, { useState } from 'react';
import {Form , Input , Button , Heading} from '../../createagist/style';

const UpdateAGist = () => {
    // const [uniqueData, setUniqueData] = useState("");
    // const [description, setDescription] = useState("");

    const editGist = () =>{
        console.log("Clicked")
    }

    return (
        <section>
        <Form>
          <Heading>Update Gist Description</Heading>
          <Input
            type="text"
            placeholder="Enter gist Discription..."

          />
          <Button onClick={() => editGist()}>Save Gist</Button>
        </Form>
      </section>
    )
}

export default UpdateAGist