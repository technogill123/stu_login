import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import{ TestComponent } from './test/test.component'
import{StudetailService} from './studetail.service';
import { AddComponent } from './add/add.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    ...routingComponents,
    TestComponent,
    AddComponent,
    ButtonComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    CommonModule
  ],
  providers: [StudetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
