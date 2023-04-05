import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardPodiumElementComponent } from './leaderboard-podium-element.component';

describe('LeaderboardPodiumElementComponent', () => {
  let component: LeaderboardPodiumElementComponent;
  let fixture: ComponentFixture<LeaderboardPodiumElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardPodiumElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaderboardPodiumElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
