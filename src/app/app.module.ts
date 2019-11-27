import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { childComponent } from './child.component';
import { parentComponent } from './parent.component';
import { SnackBarService } from './snack-bar.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,BrowserAnimationsModule ],
  declarations: [ childComponent, parentComponent ],
  bootstrap:    [ parentComponent ],
  providers: [SnackBarService]
})
export class AppModule { }
