import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUpdateItemComponent } from './new-update-item.component';

describe('NewUpdateItemComponent', () => {
  let component: NewUpdateItemComponent;
  let fixture: ComponentFixture<NewUpdateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUpdateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUpdateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
