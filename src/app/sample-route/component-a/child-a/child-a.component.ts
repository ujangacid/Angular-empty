import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from '../image.model';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss'],
})
export class ChildAComponent implements OnInit {
  @Input() image!: Image;
  @Output() result = new EventEmitter<number>()
  counter:number = 0;
  increment():void {
    this.counter++;
    this.result.emit(this.counter)
  }
  decrement():void {
    this.counter--;
    this.result.emit(this.counter)
  }
  name: string = '';
  constructor(private readonly route: ActivatedRoute) {
  } //untuk mengambil parameter

  //salah satu komponen lifecycle
  //ini akan dipanggil/load saat 'ChildAComponent' dipanggil
  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      const { name } = param;
      this.name = name;
    });
  }
}
