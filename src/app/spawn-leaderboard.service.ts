import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpawnLeaderboardService {

  constructor() { }
  messageSubject = new Subject<string>();
  sayMessage(message:string){
    this.messageSubject.next(message);
  }
}
