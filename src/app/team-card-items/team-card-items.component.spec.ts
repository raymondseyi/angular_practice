import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCardItemsComponent } from './team-card-items.component';

describe('TeamCardItemsComponent', () => {
  let component: TeamCardItemsComponent;
  let fixture: ComponentFixture<TeamCardItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamCardItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamCardItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
