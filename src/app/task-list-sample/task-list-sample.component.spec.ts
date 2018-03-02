import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListSampleComponent } from './task-list-sample.component';

describe('TaskListSampleComponent', () => {
  let component: TaskListSampleComponent;
  let fixture: ComponentFixture<TaskListSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
