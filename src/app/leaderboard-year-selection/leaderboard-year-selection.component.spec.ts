import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardYearSelectionComponent } from './leaderboard-year-selection.component';

describe('LeaderboardYearSelectionComponent', () => {
  let component: LeaderboardYearSelectionComponent;
  let fixture: ComponentFixture<LeaderboardYearSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardYearSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaderboardYearSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
