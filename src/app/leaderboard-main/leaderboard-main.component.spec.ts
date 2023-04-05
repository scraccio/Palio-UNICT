import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardMainComponent } from './leaderboard-main.component';

describe('LeaderboardMainComponent', () => {
  let component: LeaderboardMainComponent;
  let fixture: ComponentFixture<LeaderboardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaderboardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
