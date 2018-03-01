import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class TaskService {

  tasks: Array<Task> = [];

  constructor() { }

  createNewTask(name?: string, value?: number, date_launch?: Date): Task {
    const newTask: Task = { id: 0, name: name, value: value, date_launch: date_launch };
    return newTask;
  }
}
