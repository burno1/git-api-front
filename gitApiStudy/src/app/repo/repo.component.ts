import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => {
      console.log(params);
    });
  }
  ngOnInit() {
  /* NEED TO PICK 
    -"name": "system-design-primer",
    -"avatar_url": "https://avatars2.githubusercontent.com/u/5458997?v=4",
    -"url": "https://api.github.com/users/donnemartin",
    -"description": "Learn how to design large-scale systems. Prep for the system design interview.  Includes Anki flashcards.",
    -"stargazers_count": 101288,
  */
  }


}
