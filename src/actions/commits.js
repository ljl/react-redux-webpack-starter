import axios from 'axios';

export function getCommits() {
  return dispatch => {
    dispatch({ type: 'GET_COMMITS' });
    axios
      .get(
        `https://api.github.com/repos/ljl/react-redux-webpack-starter/commits`
      )
      .then(response => {
        dispatch({ type: 'GET_COMMITS_SUCCESS', payload: response.data });
      })
      .catch(err => {
        dispatch({ type: 'GET_COMMITS_FAILED', payload: err });
      });
  };
}
