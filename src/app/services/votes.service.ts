import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from './../models/vote.model';

@Injectable()
export class VotesService {
  private votesUrl = '../../assets/app.json';

  constructor(
    private http: HttpClient
  ) {}

  getVotes(): Observable<Vote[]> {
    return this.http.get<Vote[]>(this.votesUrl);
  }
}
