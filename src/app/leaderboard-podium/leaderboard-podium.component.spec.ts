import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardPodiumComponent } from './leaderboard-podium.component';

describe('LeaderboardPodiumComponent', () => {
  let component: LeaderboardPodiumComponent;
  let fixture: ComponentFixture<LeaderboardPodiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardPodiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaderboardPodiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
