import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTasksItemsComponent } from './daily-tasks-items.component';

describe('DailyTasksItemsComponent', () => {
  let component: DailyTasksItemsComponent;
  let fixture: ComponentFixture<DailyTasksItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyTasksItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyTasksItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
