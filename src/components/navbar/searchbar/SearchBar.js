import React, { useState, useContext, useCallback } from "react";
import { GistContext } from "../../../context/GistContext";
import { Div } from "./style";
import { Input, Tooltip } from "antd";

const { Search } = Input;

const SearchBar = () => {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(GistContext);
  const searchGists = useCallback(() => {
    dispatch({
      type: "SEARCH",
      payload: {
        searchValue: value,
        tab: 10,
      },
    });
    setValue("");
  }, [dispatch]);
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
