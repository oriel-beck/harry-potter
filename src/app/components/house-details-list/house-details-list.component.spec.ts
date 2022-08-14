import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseDetailsListComponent } from './house-details-list.component';

describe('HouseDetailsComponent', () => {
  let component: HouseDetailsListComponent;
  let fixture: ComponentFixture<HouseDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HouseDetailsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
