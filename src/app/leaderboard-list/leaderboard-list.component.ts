import {Component, Input} from '@angular/core';
import * as LEADERBOARDS from '../../assets/leaderboards.json';

@Component({
  selector: 'app-leaderboard-list',
  templateUrl: './leaderboard-list.component.html',
  styleUrls: ['./leaderboard-list.component.css']
})
export class LeaderboardListComponent {
  leaderboards: any = LEADERBOARDS;
  @Input() year: string;
  sortArray(){
    return this.leaderboards[this.year].sort((a: { posizione: string; }, b: { posizione: string; }) => parseInt(a.posizione) - parseInt(b.posizione)).slice(3);
  }
}
