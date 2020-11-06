import {
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_START,
  FETCH_SMURFS_FAILURE,
  POST_SMURFS_SUCCESS,
  POST_SMURFS_START,
  POST_SMURFS_FAILURE,
} from "../action/";

const intialState = {
  smurfsArr: [],
  isLoading: false,
  error: "",
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfsArr: action.payload,
        isLoading: false,
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case POST_SMURFS_START:
      return {
        ...state,
        isLoading: true
      };
    case POST_SMURFS_SUCCESS:
      return {
        ...state,
        smurfsArr: action.payload,
        isLoading: false,
      };
    case POST_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
