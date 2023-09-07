import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CompAtributosComponent } from './comp-atributos/comp-atributos.component';
import { ModuloProjComponent } from './modulo-proj/modulo-proj.component';
import { InputComponent } from './modulo-proj/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CompAtributosComponent,
    ModuloProjComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
