import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { TaskListSampleComponent } from './task-list-sample/task-list-sample.component';
import { CepSampleComponent } from './cep-sample/cep-sample.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

import { FormatCurrencyPipe } from './format-currency.pipe';
import { MyTaskDirective } from './my-task.directive';

import { TaskService } from './task.service';
import { CepService } from './cep.service';

import localePt from '@angular/common/locales/pt';
import { ValidacaoSampleComponent } from './validacao-sample/validacao-sample.component';
import { NavComponent } from './nav/nav.component';

registerLocaleData(localePt);

const routers = [
  { path: 'tasks', component: TaskListSampleComponent },
  { path: 'cep', component: CepSampleComponent },
  { path: 'validacao', component: ValidacaoSampleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskListSampleComponent,
    TaskFormComponent,
    TaskListComponent,
    MyTaskDirective,
    CepSampleComponent,
    FormatCurrencyPipe,
    ValidacaoSampleComponent,
    NavComponent
  ],
  imports     : [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule.forRoot(routers) ],
  providers   : [ TaskService, CepService ],
  bootstrap   : [ AppComponent ]
})
export class AppModule { }
