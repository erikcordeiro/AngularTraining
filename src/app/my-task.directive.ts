import { Directive, ElementRef, HostListener, Input } from '@angular/core';

import { Task } from './task';

@Directive({
  selector: '[appMyTask]'
})
export class MyTaskDirective {

  private _myTask: Task;

  constructor(private el: ElementRef) { }

  get appMyTask() {
    return this._myTask;
  }

  @Input()
  set appMyTask(value: Task) {
    this._myTask = value;
  }

  @HostListener('click')
  onClick() {
    alert('ID: ' + this.appMyTask.id + '\nITEM ID: ' + this.el.nativeElement.id);
  }
}
