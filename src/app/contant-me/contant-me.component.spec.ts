import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContantMeComponent } from './contant-me.component';

describe('ContantMeComponent', () => {
  let component: ContantMeComponent;
  let fixture: ComponentFixture<ContantMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContantMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContantMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
