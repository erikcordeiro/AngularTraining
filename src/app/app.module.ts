import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { TaskListSampleComponent } from './task-list-sample/task-list-sample.component';
import { CepSampleComponent } from './cep-sample/cep-sample.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

import { FormatCurrencyPipe } from './format-currency.pipe';
import { MyTaskDirective } from './my-task.directive';
import { TaskService } from './task.service';

import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    TaskListSampleComponent,
    TaskFormComponent,
    TaskListComponent,
    MyTaskDirective,
    CepSampleComponent,
    FormatCurrencyPipe
  ],
  imports     : [ BrowserModule, FormsModule ],
  providers   : [ TaskService ],
  bootstrap   : [ AppComponent ]
})
export class AppModule { }
