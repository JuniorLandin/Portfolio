import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProjectsComponent } from './dialog-projects.component';

describe('DialogProjectsComponent', () => {
  let component: DialogProjectsComponent;
  let fixture: ComponentFixture<DialogProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogProjectsComponent]
    });
    fixture = TestBed.createComponent(DialogProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});