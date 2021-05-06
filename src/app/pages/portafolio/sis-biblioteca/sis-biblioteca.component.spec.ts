import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisBibliotecaComponent } from './sis-biblioteca.component';

describe('SisBibliotecaComponent', () => {
  let component: SisBibliotecaComponent;
  let fixture: ComponentFixture<SisBibliotecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisBibliotecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
