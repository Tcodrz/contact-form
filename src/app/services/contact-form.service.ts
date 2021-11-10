import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ContactForm } from '../interface/contact-form.interface';
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


  /**
   * Submit a 'contact-us' request to the server
   * @param contact contact details to send to the server
   * @returns void promise
   */
  submitRequest(contact: ContactForm): Promise<void> {
    return new Promise(resolve => {
      if (this.cacheService.isItemInCache(contact.email)) {
        this.router.navigate([`result/${contact.name}`]);
      } else {
        this.cacheService.setItemInCache<ContactForm>(contact.email, contact);
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
