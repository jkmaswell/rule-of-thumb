import { Vote } from './../../models/vote.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { VotesService } from './../../services/votes.service';
import { Subscription } from 'rxjs';
import { LocalStorageService } from './../../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  votes: Vote[];
  subscriptions = new Subscription();

  constructor(
    private votesService: VotesService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    const cache = this.localStorageService.getValue(this.localStorageService.VOTES);
    if (cache) {
      this.votes = cache;
    } else {
      const votesServiceSubscription = this.votesService.getVotes().subscribe(votes => {
        this.votes = votes;
        this.localStorageService.setValue(this.localStorageService.VOTES, votes);
      });
      this.subscriptions.add(votesServiceSubscription);
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
