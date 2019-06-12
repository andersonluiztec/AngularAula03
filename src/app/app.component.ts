import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface IEmail {
  to: string,
  subject: string,
  body: string,
}

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'Email Legal';
  list: string[] = ['email1', 'email2', 'email3']
  isNewEmailOpen = false;

  emails: IEmail[] = [];

  email: IEmail = {
    to: '',
    subject: '',
    body: '',
  }

  toogleOpenNewEmail() {
    this.isNewEmailOpen = !this.isNewEmailOpen;
  }

  sendEmail(form: NgForm) {
      if (form.valid) {
      this.emails.push({ ...this.email });
      this.email = {
        to: '',
        subject: '',
        body: '',
      }
      form.resetForm();
  }
  }
}
