import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-test',
  
  template:`
  <form method="GET">
  <h1>
  Welcome to my app!
</h1>
   Username:<input #user type="text"><br>
  <br>
  password:<input #pass type="password">
  <br>
  <br>
  <button (click)="onclick(user.value,pass.value)">Login</button>
  </form>
`,
  styles: []
})
export class TestComponent implements OnInit {

  constructor(private route: Router, private router: Router) { }

  ngOnInit() {
  }
onclick(a,b){
  if(a==b && a.length==0 ){
    alert("Please fill the required spaces");
       }
 
   else if (a.length==0) {
     alert("please enter the Username");
   }
   else if (b.length==0) {
     alert("please enter the password");
   } 
   else if(a==b)
    {
      this.router.navigate(['/login']);
     
    }
     
  
}
}
