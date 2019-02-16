import { Component, OnInit, Input } from '@angular/core';
import { Vote } from './../../../../models/vote.model';
import { LocalStorageService } from './../../../../services/local-storage.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  @Input() vote: Vote;

  upvotesPercentage: string;
  downvotesPercentage: string;
  voting = true;
  cache: Vote[];

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.cache = this.localStorageService.getValue(this.localStorageService.VOTES);
    this.getPercentages();
  }

  getPercentages() {
    const total = this.vote.upvotes + this.vote.downvotes;
    this.upvotesPercentage = ((this.vote.upvotes / total) * 100).toFixed(0);
    this.downvotesPercentage = ((this.vote.downvotes / total) * 100).toFixed(0);
  }

  selectVote(value) {
    if (value === 'up') {
      this.vote.up = true;
      this.vote.down = false;
    } else {
      this.vote.down = true;
      this.vote.up = false;
    }
  }

  voteCard() {
    if ((this.vote.up || this.vote.down) && this.cache) {
      if (this.vote.up) {
        this.vote.upvotes += 1;
      } else {
        this.vote.downvotes += 1;
      }
      const index = this.cache.findIndex(el => {
        return el.name === this.vote.name;
      });
      this.cache[index] = this.vote;
      this.vote.up = false;
      this.vote.down = false;
      this.voting = false;
      this.getPercentages();
      this.localStorageService.setValue(this.localStorageService.VOTES, this.cache);
    }
    return false;
  }

  voteAgain() {
    this.voting = true;
  }
}
