import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellersTabComponent } from './best-sellers-tab.component';

describe('BestSellersTabComponent', () => {
  let component: BestSellersTabComponent;
  let fixture: ComponentFixture<BestSellersTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSellersTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSellersTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
