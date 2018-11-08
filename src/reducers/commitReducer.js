export default function reducer(
  state = {
    commits: [],
    loading: false
  },
  action
) {
  switch (action.type) {
    case "FETCH_COMMITS":
      return { ...state, commits: [], loading: true };
    case "FETCH_COMMITS_SUCCESS":
      return { ...state, commits: action.payload, loading: false };
    case "FETCH_COMMITS_FAILED":
      return { ...state, commits: [], loading: false };
    default:
      return state;
  }
}
