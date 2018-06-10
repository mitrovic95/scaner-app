import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeniComponentComponent } from './meni-component.component';

describe('MeniComponentComponent', () => {
  let component: MeniComponentComponent;
  let fixture: ComponentFixture<MeniComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeniComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeniComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
