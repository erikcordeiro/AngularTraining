import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list-sample',
  templateUrl: './task-list-sample.component.html',
  styleUrls: ['./task-list-sample.component.css']
})
export class TaskListSampleComponent implements OnInit {
  title = 'Task List Sample';

  constructor() { }

  ngOnInit() { }

}
