import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  isItemInCache(key: string): boolean {
    const isItem = sessionStorage.getItem(key);
    return isItem ? true : false;
  }

  getItemFromCache<T>(key: string): T | null {
    if (this.isItemInCache(key)) {
      return JSON.parse(sessionStorage.getItem(key));
    }
    return null;
  }

  setItemInCache<T>(key: string, item: T): void {
    sessionStorage.setItem(key, JSON.stringify(item));
  }

}
