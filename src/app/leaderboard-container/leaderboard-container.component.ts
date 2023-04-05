import {Component, Inject} from '@angular/core';

@Component({
  selector: 'app-leaderboard-container',
  templateUrl: './leaderboard-container.component.html',
  styleUrls: ['./leaderboard-container.component.css']
})
export class LeaderboardContainerComponent {
  palio_year: string;
  constructor(@Inject('token') palio_year: string) {
    this.palio_year = palio_year;
  }
}
