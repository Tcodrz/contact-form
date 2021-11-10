import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultPageService {


  reverseName(str: string): string {
    const arr = str.split('');
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }

    return arr.join('');
  }

}
