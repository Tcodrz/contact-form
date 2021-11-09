import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactForm } from 'src/app/interface/user.interface';
import { ContactFormService } from 'src/app/services/contact-form.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;

  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(
    private fb: FormBuilder,
    private contactService: ContactFormService
  ) {
    this.contactForm = this.fb.group({
      'contactName': ['', Validators.required],
      'contactEmail': ['', Validators.compose([Validators.required, Validators.email])]
    });
  }


  get contactName() { return this.contactForm.get('contactName') }
  get contactEmail() { return this.contactForm.get('contactEmail') }

  onSubmit() {
    const contact: ContactForm = {
      name: this.contactName.value,
      email: this.contactEmail.value
    }
    this.contactService.submitRequest(contact);
    /*
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
    */
  }


}
