import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsmasterComponent } from './foodsmaster.component';

describe('FoodsmasterComponent', () => {
  let component: FoodsmasterComponent;
  let fixture: ComponentFixture<FoodsmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodsmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodsmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
