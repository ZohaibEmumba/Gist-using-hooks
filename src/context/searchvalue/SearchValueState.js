import React, { useState } from "react";
import SearchValueContext from "./SearchValueContext";

const SearchValueState = (props) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchValueContext.Provider value={{ searchValue, setSearchValue }}>
      {props.children}
    </SearchValueContext.Provider>
  );
};

export default SearchValueState;
