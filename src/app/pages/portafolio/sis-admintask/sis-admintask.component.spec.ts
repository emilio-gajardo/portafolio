import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisAdmintaskComponent } from './sis-admintask.component';

describe('SisAdmintaskComponent', () => {
  let component: SisAdmintaskComponent;
  let fixture: ComponentFixture<SisAdmintaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisAdmintaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisAdmintaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
