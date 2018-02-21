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
  <td>{{x.age}}</td> <button (click)="func(x.id)">eidt</button>

  </table>
<div *ngIf="showrslt">

<label>id</label><input [(ngModel)]="a[0].id" type="number">
<label>name</label><input  [(ngModel)]="a[0].name" type="text">
<label>age</label><input [(ngModel)]="a[0].age" type="number">

</div>
  `,
  styles: []
})
export class UpdateComponent implements OnInit {
  showrslt=false
  public studetail=[]
  public a;

  constructor(private _studetailService: StudetailService) { }

  ngOnInit() {
    this.studetail=this._studetailService.getstudetail();

  }
func(id){
  this.showrslt=true
  this.a=(this.studetail.filter(studetail=> studetail.id==id))

}

}
