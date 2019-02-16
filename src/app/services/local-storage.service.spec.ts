import { LocalStorageService } from './local-storage.service';
import {TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('LocalStorageService', () => {

  let localStorageServiceMock: LocalStorageService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        LocalStorageService
      ]
    });

    localStorageServiceMock = TestBed.get(LocalStorageService);
    httpMock = TestBed.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(localStorageServiceMock).toBeTruthy();
  });

  it('should call setValue()', () => {
    const valueKey = 'mockValue';
    const value = [{name: 'name', description: 'some description'}];
    localStorageServiceMock.setValue(valueKey, value);
    const response = localStorageServiceMock.getValue(valueKey);
    expect(response).toBeTruthy();
  });

  it('should call getValue()', () => {
    const valueKey = 'mockValue';
    const response = localStorageServiceMock.getValue(valueKey);
    expect(response).toBeTruthy();
  });

  it('should call removeValue()', () => {
    const valueKey = 'mockValue';
    localStorageServiceMock.removeValue(valueKey);
    const response = localStorageServiceMock.getValue(valueKey);
    expect(response).toBeFalsy();
  });
});
