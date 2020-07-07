export const actions = {
  UPDATE_QUERY: 'actions/UPDATE_QUERY',
  FETCH_REPOS: 'actions/FETCH_REPOS',
  REPOS_RECEIVED: 'actions/REPOS_RECEIVED',
};

export const reposReceived = (repos, message) => (
  { type: actions.REPOS_RECEIVED, repos, message }
);

export const updateQuery = (payload) => (
  { type: actions.UPDATE_QUERY, payload }
);

export const fetchRepos = () => ({ type: actions.FETCH_REPOS });
