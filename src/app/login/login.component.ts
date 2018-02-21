import { Component, OnInit } from '@angular/core';
import {StudetailService} from '../studetail.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  template: `
  <body>
   <app-button></app-button>
   <table *ngFor="let x of studetail" style="width:10%">
   <td>{{x.id}}</td>
   <td>{{x.name}}</td>
   <td>{{x.age}}</td>
   </table>
   </body>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
public studetail=[]

  constructor(private _studetailService: StudetailService) { }

  ngOnInit() {
    this.studetail=this._studetailService.getstudetail();

  }
  
}
