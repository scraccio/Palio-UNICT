import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-leaderboard-podium-element',
  templateUrl: './leaderboard-podium-element.component.html',
  styleUrls: ['./leaderboard-podium-element.component.css']
})
export class LeaderboardPodiumElementComponent {
  @Input() result: any;
  @Input() logo: any;
  @Input() trophy: any;
  constructor() {}

}
