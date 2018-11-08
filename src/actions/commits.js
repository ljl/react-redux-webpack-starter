import axios from "axios";

export function fetchCommits() {
  return dispatch => {
    dispatch({ type: "FETCH_COMMITS" });
    axios
      .get(
        `https://api.github.com/repos/ljl/react-redux-webpack-starter/commits`
      )
      .then(response => {
        dispatch({ type: "FETCH_COMMITS_SUCCESS", payload: response.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_COMMITS_FAILED", payload: err });
      });
  };
}
