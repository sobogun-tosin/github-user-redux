import axios from "axios";
import { Dispatch } from "react";
import {
  ERROR,
  GET_USER,
  GithubAction,
  LOADING,
  FOLLOWER,
  REQUEST,
  REPOS,
  LOGIN,
} from "./types";

const url = `https://api.github.com`;

export const searchUser = (user: string) => async (
  dispatch: Dispatch<GithubAction>
) => {
  dispatch({ type: ERROR, payload: "" });
  dispatch({ type: LOADING });
  try {
    const res = await axios.get(`${url}/users/${user}`);
    const dataRes = res.data;
    const { followers_url, repos_url } = dataRes;
    const followers = await axios.get(`${followers_url}?per_page=100`);
    const repos = await axios.get(`${repos_url}?per_page=100`);

    if (res) {
      dispatch({
        type: GET_USER,
        payload: dataRes,
      });
      dispatch({
        type: FOLLOWER,
        payload: followers.data,
      });
      dispatch({
        type: REPOS,
        payload: repos.data,
      });
    }
  } catch (err) {
    setTimeout(() => {
      dispatch({
        type: ERROR,
        payload: "Username does not exist, please enter a valid username ",
      });
    }, 3000);
    console.log(err);
  }
};

export const LoginUser = () => (dispatch: Dispatch<GithubAction>) => {
  dispatch({
    type: LOGIN,
    payload: true,
  });
};

export const Logout = () => (dispatch: Dispatch<GithubAction>) => {
  dispatch({
    type: LOGIN,
    payload: false,
  });
};

export const dailyRequest = () => async (dispatch: Dispatch<GithubAction>) => {
  try {
    const requestRes = await axios.get(`${url}/rate_limit`);
    const requestData = requestRes.data;
    const rate = requestData.rate;
    const remaining = rate.remaining;

    if (remaining === 0) {
      throw new Error("Sorry you have exceeded your daily search limit");
    } else {
      dispatch({
        type: REQUEST,
        payload: remaining,
      });
    }
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err,
    });
  }
};
