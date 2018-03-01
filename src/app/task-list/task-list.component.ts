import { Component, OnInit } from '@angular/core';
import { Task } from '../task';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  task: Task  = {
    id: 0,
    name: '',
    value: 0,
    date_launch: new Date()
  };

  tasks = [];

  ngOnInit() {

  }

  add() {

    // cria uma cópia do objeto ths.task para quebrar a referência.
    const item = Object.assign({}, this.task);
    item.id = this.tasks.length + 1;
    item.date_launch = new Date();

    // a cópia é inserida no array.
    this.tasks.push(item);

    // também poderia ser utilizada uma instância limpa (resetar o objeto)
    // de Task após o preenchimento do formulário,
    /*this.task = {
      name: '',
      value: 0,
      ...
    };*/
  }
}
