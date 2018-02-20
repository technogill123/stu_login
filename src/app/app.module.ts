import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import{ TestComponent } from './test/test.component'
import{StudetailService} from './studetail.service';
import { AddComponent } from './add/add.component';
@NgModule({
  declarations: [
    AppComponent,
    ...routingComponents,
    TestComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StudetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
