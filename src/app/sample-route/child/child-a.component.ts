import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent implements OnInit {

  name:string = ''

  constructor(
    private readonly route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      const {name} = param;
      this.name = name;
    })
  }

}
