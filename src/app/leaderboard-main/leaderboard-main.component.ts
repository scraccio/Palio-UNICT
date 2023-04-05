import {Component, ComponentRef, Injector, ViewChild, ViewContainerRef} from '@angular/core';
import {SpawnLeaderboardService} from "../spawn-leaderboard.service";
import {LeaderboardPodiumComponent} from "../leaderboard-podium/leaderboard-podium.component";
import {LeaderboardContainerComponent} from "../leaderboard-container/leaderboard-container.component";

@Component({
  selector: 'app-leaderboard-main',
  templateUrl: './leaderboard-main.component.html',
  styleUrls: ['./leaderboard-main.component.css']
})
export class LeaderboardMainComponent {
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  private palio_year: string;
  private leaderboardPodium: ComponentRef<LeaderboardPodiumComponent>;
  private leaderboardContainerComponent: ComponentRef<LeaderboardContainerComponent>;
  constructor(private service:SpawnLeaderboardService) {
    this.service.messageSubject.subscribe({
      next: x => this.addLeadeboard(x)
    });
  }

  addLeadeboard(year: string) {
    this.palio_year = year;
    const injector = Injector.create({providers: [{provide: 'token', useValue: this.palio_year}]});

    if(this.leaderboardPodium) this.leaderboardPodium.destroy();
    if(this.leaderboardContainerComponent) this.leaderboardContainerComponent.destroy();

    this.leaderboardPodium = this.container.createComponent(LeaderboardPodiumComponent, { injector });
    this.leaderboardContainerComponent = this.container.createComponent(LeaderboardContainerComponent, { injector });
  }


}
