import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVehicleOnlineComponent } from './list-vehicle-online.component';

describe('ListVehicleOnlineComponent', () => {
  let component: ListVehicleOnlineComponent;
  let fixture: ComponentFixture<ListVehicleOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVehicleOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVehicleOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
