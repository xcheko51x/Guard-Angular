import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaunoComponent } from './paginauno.component';

describe('PaginaunoComponent', () => {
  let component: PaginaunoComponent;
  let fixture: ComponentFixture<PaginaunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
