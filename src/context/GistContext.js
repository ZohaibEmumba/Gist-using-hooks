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
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedin: true,
        userName: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        tab: action.payload.tab
      };
    case "VISIBLESCREEN":
      return {
        ...state,
        tab: action.payload.tab,
        gistID: action.payload.gistID,
      };
    case "SEARCH":
      return {
        ...state,
        searchValue: action.payload.searchValue,
        tab: action.payload.tab,
      };
    default:
      return state;
  }
};
