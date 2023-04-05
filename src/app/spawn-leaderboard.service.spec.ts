import { TestBed } from '@angular/core/testing';

import { SpawnLeaderboardService } from './spawn-leaderboard.service';

describe('SpawnLeaderboardService', () => {
  let service: SpawnLeaderboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpawnLeaderboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
