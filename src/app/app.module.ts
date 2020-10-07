import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormReactiveComponent } from './Components/form-reactive/form-reactive.component';
import { DatoComponent } from './Components/dato/dato.component';
import { NavComponent } from './Components/nav/nav.component';
import { AboutComponent } from './Components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FormReactiveComponent,
    DatoComponent,
    NavComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
