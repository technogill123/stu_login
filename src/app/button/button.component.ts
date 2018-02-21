import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-button',
  template: `
  <button (click)="clicka()">Students List</button>
  <button (click)="onclick()">Student Add</button>
  <button (click)="func2()">Student Update</button>
  <button (click)="func1()" type="submit">Logout</button>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }
  onclick(){
 
    
    this.router.navigate(['/add']);
    

}
clicka(){
  this.router.navigate(['/login']);
}


func1(){
  this.router.navigate(['/test']);
}
func2(){
  this.router.navigate(['/update'])
}

}
