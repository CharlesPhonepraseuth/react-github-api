
// eslint-disable-next-line import/prefer-default-export
export const cleanRepos = (list) => {
  return list.map((repo) => {
    return {
      id: repo.id,
      image: repo.owner.avatar_url,
      title: repo.name,
      orga: repo.owner.login,
      description: repo.description || 'No description provided :(',
      private: repo.private,
    };
  });
};

export const GITHUB_API_URL = 'https://api.github.com/search/repositories?q=';
export const DEFAULT_QUERY = 'javascript';
