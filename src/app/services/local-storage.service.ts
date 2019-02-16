import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  private tempStorage = {};

  VOTES = 'votes';

  getValue(key) {
    const encodedKey = window.btoa(`@@VOTES:${key}`);
    let encodedValue;
    try {
      encodedValue = window.localStorage.getItem(encodedKey);
    } catch (e) {
      encodedValue = this.tempStorage[encodedKey];
    }
    const stringValue = encodedValue && window.atob(encodedValue);
    return stringValue && JSON.parse(stringValue);
  }

  setValue(key, value) {
    if (!value && value !== false) {
      return;
    }
    const encodedKey = window.btoa(`@@VOTES:${key}`);
    const stringValue = JSON.stringify(value);
    const encodedValue = window.btoa(stringValue);
    try {
      window.localStorage.setItem(encodedKey, encodedValue);
    } catch (e) {
      this.tempStorage[encodedKey] = encodedValue;
    }
  }

  removeValue(key) {
    const encodedKey = window.btoa(`@@VOTES:${key}`);
    try {
      window.localStorage.removeItem(encodedKey);
    } catch (e) {
      this.tempStorage[encodedKey] = undefined;
    }
  }

  clearStorage() {
    if (window.localStorage) {
      window.localStorage.clear();
    }
  }
}
