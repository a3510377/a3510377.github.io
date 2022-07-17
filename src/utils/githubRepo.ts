import axios from 'axios';
import { useLocalStorage } from '@vueuse/core';
import type { components } from '@octokit/openapi-types';

import { githubUserName } from './config';
import { deepCopy } from '.';

export type BaseMinimalRepository = components['schemas']['minimal-repository'];
export type BaseMinimalLanguages = components['schemas']['language'];

export interface minimalRepository extends BaseMinimalRepository {
  languages: BaseMinimalLanguages;
  stargazers_count: number;
}

const baseAxios = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    /*  Authorization: '' */
  },
});

export const getRepos = async (
  count: number,
  callback?: (repos: minimalRepository[]) => void
) => {
  const oldData = useLocalStorage<{
    updateTime?: Date;
    repos?: minimalRepository[];
  }>('data-repos', {});

  const diffTime = +new Date() - +new Date(oldData.value.updateTime || '');
  const requests: Promise<unknown>[] = [];

  if (isNaN(diffTime) || diffTime / 864e5 > 5 || !oldData.value.repos?.length) {
    /** @see https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user */
    oldData.value.repos = await baseAxios
      .get(`https://api.github.com/users/${githubUserName}/repos`, {
        params: { per_page: 30 },
        headers: { Accept: 'application/vnd.github.mercy-preview+json' },
      })
      .then((_): BaseMinimalRepository[] => _.data)
      .then(async (data) => {
        const repos: minimalRepository[] = [];

        for (const repo of data
          .sort((a, b) => {
            const aStargazersCount = a.stargazers_count || 0;
            const bStargazersCount = b.stargazers_count || 0;

            if (aStargazersCount < bStargazersCount) return -1;
            return aStargazersCount > bStargazersCount ? 1 : 0;
          })
          .slice(0, count)
          .reverse()) {
          const repoData: minimalRepository = {
            ...repo,
            languages: {},
            stargazers_count: repo.stargazers_count || 0,
          };

          requests.push(
            baseAxios
              /** @see https://docs.github.com/en/rest/repos/repos#list-repository-languages */
              .get(repo.languages_url, {
                headers: { Accept: 'application/vnd.github+json' },
              })
              .then((_) => (repoData.languages = <BaseMinimalLanguages>_.data))
          );
          repos.push(repoData);
        }

        return repos;
      });
  }

  if (requests.length > 0) {
    Promise.all(requests).then(() => {
      oldData.value.updateTime = new Date();
      oldData.value.repos && callback?.(deepCopy(oldData.value.repos) || []);
    });
  }

  return oldData.value.repos || [];
};
