import { VotesService } from './votes.service';
import {TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('VotesService', () => {

  let votesServiceMock: VotesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        VotesService
      ]
    });

    votesServiceMock = TestBed.get(VotesService);
    httpMock = TestBed.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(votesServiceMock).toBeTruthy();
  });

  it('should call getVotes()', () => {
    const votesResponse = [{name: 'name', description: 'some description'}];
    votesServiceMock.getVotes().subscribe(votes => {
      expect(votes.length).toBe(1);
    });
    const req = httpMock.expectOne('../../assets/app.json');
    expect(req.request.method).toBe('GET');
    req.flush(votesResponse);
  });
});
