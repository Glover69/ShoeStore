import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleTabComponent } from './sale-tab.component';

describe('SaleTabComponent', () => {
  let component: SaleTabComponent;
  let fixture: ComponentFixture<SaleTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
