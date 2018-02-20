import { Component, OnInit } from '@angular/core';
import {StudetailService} from '../studetail.service';
@Component({
  selector: 'app-login',
  template: `
   <button >Students List</button>
   <button>Student Add</button>
   <button>Student Update</button>

   <table *ngFor="let x of studetail" style="width:10%">
   <td>{{x.id}}</td>
   <td>{{x.name}}</td>
   <td>{{x.age}}</td>

   </table>
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
