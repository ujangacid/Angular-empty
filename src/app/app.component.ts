import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Pascal App';

  //data binding string interpolation
  message:string = 'Konnichiwa';
  getMessage():string {
    return 'Hai'
  };
  people:string[] = ['ujang','gebo','oren','belang'];

  getPeople():string {
    let result = '';
    for (const person of this.people) {
      result +=person
    }
    return result;
  }

  employees = [
    {
      name: 'acid',
      address: 'Bandung'
    },
    {
      name: 'mambo',
      address: 'Semarang'
    },
    {
      name: 'bonin',
      address: 'Baleendah'
    },
  ]

  image = {
    src:'assets/img/PasFoto.jpeg',
    alt: 'foto profil'
  }

  fullName:string = 'My Name is <strong>Ujang</strong>'
  color:string = 'red'
  fontSize:string = '5rem';

  styles = {
    color: 'blue',
    fontSize:'3rem',
    fontWeight:'300'
  }


  increment: number = 0;

  isDisable: boolean = false;

  ngOnInit():void {
    setTimeout(() => {
      this.isDisable = true
    }, 2000);
  }

  //event Binding
  //click,onLoad,change,keyPress, etc
  onClickButton():void {
    this.message = 'Olla'
  }

  onKeyPress(event:any):void {
    const {value} = event.target
    this.message = value;
  }

}
