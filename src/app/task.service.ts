import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Task } from './task';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {
  private readonly serviceUrl = 'http://localhost:35284/api/tasks';

  constructor(private http: Http) { }

  getTasks() {
    return this.http.get(this.serviceUrl)
                    .toPromise()
                    .then(response => this.fillTasks(response.json()))
                    .catch(reason => console.log(reason));
  }

  addTask(name: string, value: number) {
    const body = JSON.stringify({ name: name, value: value, date_launch: new Date() });
    const headerOptions = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.serviceUrl, body, requestOptions)
                    .toPromise();
                    // .map(x => x.json());
  }

  private fillTasks(jsonResponse): Array<Task> {
    const tasks: Array<Task> = [];

    if (!jsonResponse.error) {
      for (let index = 0; index < jsonResponse.length; index++) {
        const item = jsonResponse[index];
        const task = new Task();

        task.id = item.id;
        task.name = item.name;
        task.value = item.value;
        task.date_launch = item.date_Launch;

        tasks.push(task);
      }
    }
    return tasks;
  }

  createNewTask(name?: string, value?: number, date_launch?: Date): Task {
    const newTask: Task = { id: 0, name: name, value: value, date_launch: date_launch };
    return newTask;
  }
}
