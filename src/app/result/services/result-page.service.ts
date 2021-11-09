import { Injectable } from '@angular/core';
import { ResultModule } from '../result.module';

@Injectable({
  providedIn: 'root'
})
export class ResultPageService {

  constructor() {
    console.log('Result Page Service Loaded');
  }

  reverseName(name: string): string {
    const nameArr = name.split('');
    let start = 0;
    let end = nameArr.length - 1;

    while (start < end) {
      const temp = nameArr[start];
      nameArr[start] = nameArr[end];
      nameArr[end] = temp;
      start++;
      end--;
    }

    return nameArr.join('');
  }

}
