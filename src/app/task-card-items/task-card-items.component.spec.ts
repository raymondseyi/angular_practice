import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardItemsComponent } from './task-card-items.component';

describe('TaskCardItemsComponent', () => {
  let component: TaskCardItemsComponent;
  let fixture: ComponentFixture<TaskCardItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCardItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCardItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
