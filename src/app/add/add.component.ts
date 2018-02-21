import { Component, OnInit } from '@angular/core';
import {StudetailService} from '../studetail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  template: `
  <app-button></app-button>
  <br>
  <h3>Id:<input [(ngModel)]="id" type="number"></h3>
  <h3>Name:<input [(ngModel)]="name" type="text"></h3>
   <h3>Age:<input [(ngModel)]="age" type="number"></h3>
<button (click)="func()" type="submit">Add</button>

  `,
  styles: []
})
export class AddComponent implements OnInit {

 

  public id;
  public name='';
  public age;
constructor(private _studentService : StudetailService,private router: Router) { }

ngOnInit() {
}
func()
{   let student=
  {
  "id":this.id,
  "name":this.name,
  "age":this.age

}

this._studentService.student.push(student);
}

}