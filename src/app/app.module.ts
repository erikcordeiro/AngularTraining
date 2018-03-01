import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormatCurrencyPipe } from './format-currency.pipe';

import localePt from '@angular/common/locales/pt';
import { MyTaskDirective } from './my-task.directive';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskService } from './task.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [ AppComponent, TaskListComponent, FormatCurrencyPipe, MyTaskDirective, TaskFormComponent ],
  imports     : [ BrowserModule, FormsModule ],
  providers   : [ TaskService ],
  bootstrap   : [ AppComponent ]
})
export class AppModule { }
