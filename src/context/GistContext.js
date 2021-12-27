import { UserName, PAT } from "../constants/Constants";

const ActionTypes = {
  Login: "LOGIN",
  Logout: "LOGOUT",
  VisibleScreen: "VISIBLESCREEN",
  Search: "SEARCH",
};

export const initialState = {
  userName: UserName,
  PAT: PAT,
  isLoggedin: false,
  tab: 1,
  gistID: null,
  searchValue: "",
};

export const GistReducer = (state = initialState, action) => {
  const {
    type,
    payload: { user, gistID, searchValue, tab },
  } = action;
  switch (type) {
    case ActionTypes.Login:
      return {
        ...state,
        isLoggedin: true,
        userName: user,
      };
    case ActionTypes.Logout:
      return initialState;

    case ActionTypes.VisibleScreen:
      return {
        ...state,
        tab: tab,
        gistID: gistID,
      };
    case ActionTypes.Search:
      return {
        ...state,
        searchValue: searchValue,
        tab: tab,
      };
    default:
      return state;
  }
};
