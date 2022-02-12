import { GitHubUser } from './github-user.interface';

export interface GithubUsersResp {
    total_count: number;
    incomplete_results: boolean;
    items: GitHubUser[];
}