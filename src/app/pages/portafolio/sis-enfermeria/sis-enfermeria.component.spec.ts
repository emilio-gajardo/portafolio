import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisEnfermeriaComponent } from './sis-enfermeria.component';

describe('SisEnfermeriaComponent', () => {
  let component: SisEnfermeriaComponent;
  let fixture: ComponentFixture<SisEnfermeriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisEnfermeriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisEnfermeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
