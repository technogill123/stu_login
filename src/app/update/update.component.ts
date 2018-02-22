import { Component, OnInit } from '@angular/core';
import {StudetailService} from '../studetail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  template: `
  <app-button></app-button>
  <table *ngFor="let x of studetail" style="width:10%">
  <td>{{x.id}}</td>
  <td>{{x.name}}</td>
  <td>{{x.age}}</td> <button (click)="func(x.id)">edit</button>

  </table>
<div *ngIf="showrslt">

<label>id</label><input [(ngModel)]="editStudentDetail.id" type="number" readonly>
<label>name</label><input  [(ngModel)]="editStudentDetail.name" type="text">
<label>age</label><input [(ngModel)]="editStudentDetail.age" type="number">
<button (click)="savedata(editStudentDetail)">Save</button>


</div>
  `,
  styles: []
})
export class UpdateComponent implements OnInit {
  showrslt=false
  public studetail=[]
  public editStudentDetail;
  public saveid;
  
  constructor(private _studetailService: StudetailService) { }

  ngOnInit() {
    this.studetail=this._studetailService.getstudetail();

  }

func(id){
  this.showrslt=true
  let std = this.studetail.filter(std=> std.id==id)[0];
  this.editStudentDetail = JSON.parse(JSON.stringify(std));
}
savedata(fetch){

  
  this.studetail.forEach(element=>{
if(fetch.id===element.id)
{
  element.name=fetch.name;
  element.age=fetch.age;

}
    
  });

}


}


