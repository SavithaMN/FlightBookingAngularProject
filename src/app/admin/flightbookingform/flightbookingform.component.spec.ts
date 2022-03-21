import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightbookingformComponent } from './flightbookingform.component';

describe('FlightbookingformComponent', () => {
  let component: FlightbookingformComponent;
  let fixture: ComponentFixture<FlightbookingformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightbookingformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightbookingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
