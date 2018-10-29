import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarshowComponent } from './carshow.component';

describe('CarshowComponent', () => {
  let component: CarshowComponent;
  let fixture: ComponentFixture<CarshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
