import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Array<Task>;

  constructor(private taskService: TaskService) {
    this.refresh();
  }

  ngOnInit() { }

  refresh() {
    this.taskService.getTasks()
                    .then((tasks: Array<Task>) => this.tasks = tasks);
  }
}
