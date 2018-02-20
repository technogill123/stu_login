
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component';
import{TestComponent} from './test/test.component';
import{AddComponent} from '.add/add.component';

const routes: Routes = [
    {path : '', redirectTo : "test",pathMatch:'full' },
    {path : 'login', component: LoginComponent},
    {path : 'test', component: TestComponent},
    {path : 'add', component: AddComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingComponents = [LoginComponent]