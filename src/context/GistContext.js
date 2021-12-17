import { createContext } from "react";

export const GistContext = createContext();

export const initialState = {
  userName: "",
  PAT: "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",
  isLoggedin: false,
  tab: 1,
  gistID: null,
  searchValue: "",
};

export const GistReducer = (state = initialState, action) => {
  const {type , payload: {user , gistID , searchValue , tab } } = action;
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedin: true,
        userName: user,
      };
    case "LOGOUT":
      
      return initialState;

    case "VISIBLESCREEN":
      return {
        ...state,
        tab: tab,
        gistID: gistID,
      };
    case "SEARCH":
      return {
        ...state,
        searchValue: searchValue,
        tab: tab,
      };
    default:
      return state;
  }
};
