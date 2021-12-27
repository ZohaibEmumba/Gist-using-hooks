import React, { useState, useContext } from "react";
import { GistContext } from "../../../App";
import { Div } from "./style";
import { Input, Tooltip } from "antd";

const { Search } = Input;

const SearchBar = () => {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(GistContext);
  const searchGists = () => {
    dispatch({
      type: "SEARCH",
      payload: {
        searchValue: value,
        tab: 10,
      },
    });
  };
  return (
    <Div>
      <Tooltip placement="topLeft" title={"Search User"}>
        <Search
          placeholder="Enter search text"
          size="large"
          onChange={(e) => setValue(e.target.value)}
          onSearch={searchGists}
        />
      </Tooltip>
    </Div>
  );
};

export default SearchBar;
