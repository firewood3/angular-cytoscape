import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeArrowTypesComponent } from './edge-arrow-types.component';

describe('EdgeArrowTypesComponent', () => {
  let component: EdgeArrowTypesComponent;
  let fixture: ComponentFixture<EdgeArrowTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdgeArrowTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeArrowTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
