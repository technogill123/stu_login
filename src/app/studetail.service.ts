import { Injectable } from '@angular/core';

@Injectable()
export class StudetailService {
student=[
  {"id":1 , "name": "Anmol", "age":21},
  {"id":2 , "name": "Aayush", "age":21},
  {"id":3 , "name": "Yachika", "age":21}
  
];
  constructor() { }

   getstudetail(){
return this.student;



  }

}
