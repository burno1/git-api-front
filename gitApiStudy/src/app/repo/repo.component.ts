import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Repo } from '../model/Repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {
  repository: Repo;

  constructor(private route: ActivatedRoute, private data: DataService) {
  }
  ngOnInit() {
  /* NEED TO PICK 
  GET /repos/:owner/:repo
  https://api.github.com/repos/owner/repo
    -"name": "system-design-primer",
    -"avatar_url": "https://avatars2.githubusercontent.com/u/5458997?v=4",
    -"url": "https://api.github.com/users/donnemartin",
    -"description": "Learn how to design large-scale systems. Prep for the system design interview.  Includes Anki flashcards.",
    -"stargazers_count": 101288,
  */
  this.route.paramMap.subscribe(params => {

     this.data.getRepo(params.get("user"),params.get("repo")).subscribe(data=> {
        this.repository= data;
        console.log(this.repository);
     })
  });
  }

}
