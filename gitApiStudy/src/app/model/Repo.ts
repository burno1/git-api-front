import { Owner } from './Owner';
 /* NEED TO PICK 
  GET /repos/:owner/:repo
  https://api.github.com/repos/owner/repo
    -"name": "system-design-primer",
    -"avatar_url": "https://avatars2.githubusercontent.com/u/5458997?v=4",
    -"url": "https://api.github.com/users/donnemartin",
    -"description": "Learn how to design large-scale systems. Prep for the system design interview.  Includes Anki flashcards.",
    -"stargazers_count": 101288,
  */

export class Repo{
    repoName: string;
    name: string;
    html_url: string;
    owner: Owner;
    avatar_url: string;
    url: string;
    repoUser: string;
    description: string;
    stargazers_count:string;
    language:string;
}