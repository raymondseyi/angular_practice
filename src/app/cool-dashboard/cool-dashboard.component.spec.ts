import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolDashboardComponent } from './cool-dashboard.component';

describe('CoolDashboardComponent', () => {
  let component: CoolDashboardComponent;
  let fixture: ComponentFixture<CoolDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoolDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoolDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
