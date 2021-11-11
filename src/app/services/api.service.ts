import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactForm } from '../interface/contact-form.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API_ENDPOINT = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  sendContactForm(contact: ContactForm): Observable<any> {
    return this.http.post(`${this.API_ENDPOINT}/contacts`, contact);
  }

}
