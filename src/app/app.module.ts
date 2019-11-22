import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { childComponent } from './child.component';
import { parentComponent } from './parent.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,BrowserAnimationsModule ],
  declarations: [ childComponent, parentComponent ],
  bootstrap:    [ parentComponent ]
})
export class AppModule { }
