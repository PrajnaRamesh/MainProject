import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDashboardComponent } from './room-dashboard.component';

describe('RoomDashboardComponent', () => {
  let component: RoomDashboardComponent;
  let fixture: ComponentFixture<RoomDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomDashboardComponent]
    });
    fixture = TestBed.createComponent(RoomDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
