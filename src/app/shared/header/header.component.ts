import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
