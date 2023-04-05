import {Component} from '@angular/core';
import * as LEADERBOARDS from '../../assets/leaderboards.json';
import { SpawnLeaderboardService } from "../spawn-leaderboard.service";

@Component({
  selector: 'app-leaderboard-year-selection',
  templateUrl: './leaderboard-year-selection.component.html',
  styleUrls: ['./leaderboard-year-selection.component.css'],
})
export class LeaderboardYearSelectionComponent {
  years = Object.keys(LEADERBOARDS).slice(0, -1).reverse();
  constructor(private service:SpawnLeaderboardService) {}

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
  onChange($event: Event) {
    this.service.sayMessage(this.getValue($event))
  }
}
