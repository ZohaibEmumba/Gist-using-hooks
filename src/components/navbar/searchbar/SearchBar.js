import React,{useState , useContext} from "react";
import SearchValueContext from "../../../context/searchvalue/SearchValueContext";
import TabContext from "../../../context/tabs/TabContext";
import {Div , Input , Icon} from './style';

const SearchBar = () => {
  const [value, setValue] = useState("");
  const {  setSearchValue} = useContext(SearchValueContext);
  const {setTab} = useContext(TabContext);

  return (
    <Div>
      <Input
        type="text"
        placeholder="Search Notes.."
        onChange={(e) => {setValue(e.target.value);
         } }
      />
      <Icon className="fas fa-search" onClick={() =>{
        setSearchValue(value);
        setTab(10)
        }} />
    </Div>
  );
}

export default SearchBar;
