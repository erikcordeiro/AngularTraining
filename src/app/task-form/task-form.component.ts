import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  task: Task = this.taskService.createNewTask();
  // tasks: Array<Task>;

  constructor(private taskService: TaskService) {
    // this.tasks = taskService.tasks;
  }

  ngOnInit() { }

  add() {
    // cria uma cópia do objeto ths.task para quebrar a referência.
    const item = Object.assign({}, this.task);

    this.taskService.addTask(this.task.name, this.task.value)
                    .catch(reason => console.log(reason));
    // a cópia é inserida no array.
    // this.tasks.push(item);

    // this.task = this.taskService.createNewTask();
    // também poderia ser utilizada uma instância limpa (resetar o objeto)
    // de Task após o preenchimento do formulário,
    /*this.task = {
      name: '',
      value: 0,
      ...
    };*/
  }
}
