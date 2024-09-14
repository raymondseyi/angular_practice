import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindassComponent } from './tailwindass.component';

describe('TailwindassComponent', () => {
  let component: TailwindassComponent;
  let fixture: ComponentFixture<TailwindassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailwindassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TailwindassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
