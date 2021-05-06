import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisImportadoraComponent } from './sis-importadora.component';

describe('SisImportadoraComponent', () => {
  let component: SisImportadoraComponent;
  let fixture: ComponentFixture<SisImportadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisImportadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisImportadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
