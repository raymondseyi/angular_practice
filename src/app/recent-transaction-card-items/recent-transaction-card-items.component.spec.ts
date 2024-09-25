import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTransactionCardItemsComponent } from './recent-transaction-card-items.component';

describe('RecentTransactionCardItemsComponent', () => {
  let component: RecentTransactionCardItemsComponent;
  let fixture: ComponentFixture<RecentTransactionCardItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentTransactionCardItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentTransactionCardItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
