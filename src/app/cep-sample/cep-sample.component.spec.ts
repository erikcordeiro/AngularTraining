import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CepSampleComponent } from './cep-sample.component';

describe('CepSampleComponent', () => {
  let component: CepSampleComponent;
  let fixture: ComponentFixture<CepSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CepSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CepSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
