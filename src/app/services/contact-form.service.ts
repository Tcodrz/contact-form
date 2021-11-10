import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ContactForm } from '../interface/user.interface';
import { ApiService } from './api.service';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(
    private cacheService: CacheService,
    private api: ApiService,
    private router: Router
  ) { }


  submitRequest(contact: ContactForm): Promise<void> {
    return new Promise(resolve => {

      if (this.cacheService.isItemInCache(contact.name)) {
        this.router.navigate([`result/${contact.name}`]);
      } else {
        this.cacheService.setItemInCache<ContactForm>(contact.name, contact);
        this.api.sendContactForm(contact)
          .subscribe(
            (res) => {
              this.router.navigate([`result/${res.json.name}`]);
            },
            (err) => {
              this.router.navigate([`result/${contact.name}`]);
            }
          )
      }
      resolve();
    })
  }


}
