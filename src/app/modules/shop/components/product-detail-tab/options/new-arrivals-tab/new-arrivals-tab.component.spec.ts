import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrivalsTabComponent } from './new-arrivals-tab.component';

describe('NewArrivalsTabComponent', () => {
  let component: NewArrivalsTabComponent;
  let fixture: ComponentFixture<NewArrivalsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArrivalsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewArrivalsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
