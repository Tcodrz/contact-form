import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactForm } from 'src/app/interface/contact-form.interface';
import { ContactFormService } from 'src/app/services/contact-form.service';
import { emailValidator } from 'src/app/shared/validators/emailValidator';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  pending: boolean = false;

  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private contactService: ContactFormService) {
    this.contactForm = new FormGroup({
      contactName: new FormControl('', [Validators.required]),
      contactEmail: new FormControl('', [Validators.required, emailValidator()])
    });
  }

  get contactName() { return this.contactForm.get('contactName') }
  get contactEmail() { return this.contactForm.get('contactEmail') }

  onSubmit(): void {
    this.pending = true;

    const contact: ContactForm = {
      name: this.contactName.value,
      email: this.contactEmail.value
    }

    this.contactService.submitRequest(contact)
      .then(() => this.pending = false)
      .catch(e => console.error(e));
  }

}


