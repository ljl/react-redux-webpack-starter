export default function reducer(
  state = {
    commits: [],
    loading: false
  },
  action
) {
  switch (action.type) {
    case 'GET_COMMITS':
      return { ...state, commits: [], loading: true };
    case 'GET_COMMITS_SUCCESS':
      return { ...state, commits: action.payload, loading: false };
    case 'GET_COMMITS_FAILED':
      return { ...state, commits: [], loading: false };
    default:
      return state;
  }
}
