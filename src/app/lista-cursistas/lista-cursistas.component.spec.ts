import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCursistasComponent } from './lista-cursistas.component';

describe('ListaCursistasComponent', () => {
  let component: ListaCursistasComponent;
  let fixture: ComponentFixture<ListaCursistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCursistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCursistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
