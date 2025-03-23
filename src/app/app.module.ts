import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TosterComponent } from './toster/toster.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    TosterComponent,
    EmployeeDetailsComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
