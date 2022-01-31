import { userData, userFollowers, userRepoes } from "../data";
import {
  ERROR,
  Follower,
  FOLLOWER,
  GetRepos,
  GetUser,
  GET_USER,
  GithubAction,
  LOADING,
  LOGIN,
  REPOS,
  REQUEST,
} from "../types";

interface InitialState {
  loading: boolean;
  error: string;
  user: GetUser;
  follower: Follower[];
  request: number;
  repos: GetRepos[] | any;
  login: boolean;
}

const initialState = {
  loading: false,
  error: "",
  user: userData,
  follower: userFollowers,
  request: 60,
  repos: userRepoes,
  login: false,
};

const githubReducer = (
  state: InitialState = initialState,
  action: GithubAction
) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: "",
      };
    case FOLLOWER:
      return {
        ...state,
        follower: action.payload,
        loading: false,
      };
    case REQUEST:
      return {
        ...state,
        request: action.payload,
        loading: false,
      };
    case REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
};

export default githubReducer;
