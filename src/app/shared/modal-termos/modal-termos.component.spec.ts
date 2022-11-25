import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTermosComponent } from './modal-termos.component';

describe('ModalTermosComponent', () => {
  let component: ModalTermosComponent;
  let fixture: ComponentFixture<ModalTermosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTermosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTermosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
