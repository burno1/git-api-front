import { DataService } from './data.service';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gitApiStudy';
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


  constructor(private data: DataService) {}
  ngOnInit() {}


  pesquisar() { 
    console.log(this.selected);
    
    this.data.getRepos(this.selected).subscribe(data => {
      this.listaRetorno = null;
      this.listaRetorno = data["repositories"].slice(0,5);
      console.log(this.listaRetorno);
    });


  }

}
