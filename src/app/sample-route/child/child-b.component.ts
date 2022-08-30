import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss']
})
export class ChildBComponent implements OnInit {

  childId: string = ''

  constructor(
    private readonly router:Router,
    private readonly route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.childId = params['id']
      }
    })
  }

}
