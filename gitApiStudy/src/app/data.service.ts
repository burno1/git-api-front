import { Repo } from './model/Repo';

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {map, startWith, skipLast} from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}
  gitHubApi ='https://api.github.com/legacy/repos/search/';
  getRepos(linguagem: string): any {
    return this.http.get(this.gitHubApi + linguagem+"?language="+linguagem+"&sort=stars&order=desc");
  }

  getRepo(user, repo): any{
    return this.http.get("https://api.github.com/repos/" + user+'/'+repo);
  }

  // saveRepos(): any{
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post("http://localhost:8080/convidados/",  );
  // }
  saveRepos (repo: Repo[]) {
    return this.http.post<Repo>("http://localhost:8080/repository",repo);
  }
  

}