import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUpdateCompanyComponent } from './new-update-company.component';

describe('NewUpdateCompanyComponent', () => {
  let component: NewUpdateCompanyComponent;
  let fixture: ComponentFixture<NewUpdateCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUpdateCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUpdateCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
