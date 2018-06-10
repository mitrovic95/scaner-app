import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUpdateUserComponent } from './new-update-user.component';

describe('NewUpdateUserComponent', () => {
  let component: NewUpdateUserComponent;
  let fixture: ComponentFixture<NewUpdateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUpdateUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
