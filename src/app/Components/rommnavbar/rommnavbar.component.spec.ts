import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RommnavbarComponent } from './rommnavbar.component';

describe('RommnavbarComponent', () => {
  let component: RommnavbarComponent;
  let fixture: ComponentFixture<RommnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RommnavbarComponent]
    });
    fixture = TestBed.createComponent(RommnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
