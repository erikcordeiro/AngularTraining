import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacaoSampleComponent } from './validacao-sample.component';

describe('ValidacaoSampleComponent', () => {
  let component: ValidacaoSampleComponent;
  let fixture: ComponentFixture<ValidacaoSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidacaoSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacaoSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
