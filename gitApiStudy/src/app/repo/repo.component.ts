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
  this.route.paramMap.subscribe(params => {

     this.data.getRepo(params.get("user"),params.get("repo")).subscribe(data=> {
        this.repository= data;
        this.repository.repoName = params.get("repo");
        this.repository.language = params.get("linguagem");
        this.repository.repoUser= params.get("user");
     })
  });
  }

}
