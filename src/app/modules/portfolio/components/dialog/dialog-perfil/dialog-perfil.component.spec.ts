import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPerfilComponent } from './dialog-perfil.component';

describe('DialogPerfilComponent', () => {
  let component: DialogPerfilComponent;
  let fixture: ComponentFixture<DialogPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogPerfilComponent]
    });
    fixture = TestBed.createComponent(DialogPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
