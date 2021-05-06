import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisHospitalComponent } from './sis-hospital.component';

describe('SisHospitalComponent', () => {
  let component: SisHospitalComponent;
  let fixture: ComponentFixture<SisHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
