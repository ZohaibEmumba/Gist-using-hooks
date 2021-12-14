import React from "react";
import {Div , Input , Icon} from './style';

const SearchBar = () => {
  return (
    <Div>
      <Input
        type="text"
        placeholder="Search Notes.."
      />
      <Icon className="fas fa-search" />
    </Div>
  );
}

export default SearchBar;
