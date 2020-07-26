import { Repo } from './../model/Repo';
import { DataService } from './../data.service';

import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Language {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  repoLanguage = new FormControl("");
  languages: Language[] = [
    {value: 'Java', viewValue: 'Java'},
    {value: 'Python', viewValue: 'Python'},
    {value: 'JavaScript', viewValue: 'JavaScript'},
    {value: 'C++', viewValue: 'C++'},
    {value: 'C', viewValue: 'C'}
  ];
  selected: string;
  listaRetorno;
  loading;
  repos: Array<Repo> = [];


  constructor(private data: DataService) {}

  ngOnInit() {
  }

  
  
  pesquisar() { 
    this.listaRetorno = null;
    this.loading = true;
    this.data.getRepos(this.selected).subscribe(data => {
      this.listaRetorno = null;
      this.listaRetorno = data["repositories"].slice(0,5);
      this.loading =false;
    });
  }

  // saveRepos(){
  //   this.repos = [];
  //   this.listaRetorno.forEach(element => {
  //     var repo = new Repo();
  //     repo.repoName = element.name;
  //     repo.language = this.selected;
  //     repo.repoUser = element.username;
  //     repo.description = element.description;
  //     repo.stargazers_count = element.followers;
      
  //     console.log(repo);
      
  //     this.repos.push(repo);
  //   });

  //   this.data.saveRepos(this.repos).subscribe(data => {
  //     console.log(data);
  //   });
  // }

}
