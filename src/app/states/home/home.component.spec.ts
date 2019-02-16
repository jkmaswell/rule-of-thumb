import { Routes, RouterModule } from '@angular/router';
import { VotesService } from './../../services/votes.service';
import { HomeComponent } from './home.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

describe('HomeComponent', () => {

  const routesMock: Routes = [];
  let comp: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let votesService: VotesService;
  let localStorageService: LocalStorageService;

  const votesServiceStub = {
    getVotes: () => {
      return Promise.resolve();
    }
  };

  const localStorageServiceStub = {
    setValue: () => {
      return Promise.resolve();
    },
    getValue: () => {
      return Promise.resolve();
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        RouterModule.forRoot(routesMock)
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: VotesService, useValue: votesServiceStub},
        {provide: LocalStorageService, useValue: localStorageServiceStub}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(HomeComponent);
    comp = fixture.componentInstance;
    votesService = TestBed.get(VotesService);
    localStorageService = TestBed.get(LocalStorageService);
    comp.ngOnInit();
    comp.ngOnDestroy();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });
});
