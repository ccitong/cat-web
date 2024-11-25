import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitMessage = 'Sending...';

      const formData = {
        to: 'info@chinaacetech.com',
        from: this.contactForm.value.email,
        name: this.contactForm.value.name,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message
      };

      // Replace with your actual backend API endpoint
      this.http.post('/api/send-email', formData)
        .subscribe({
          next: (response: any) => {
            this.submitMessage = 'Message sent successfully!';
            this.contactForm.reset();
          },
          error: (error) => {
            this.submitMessage = 'Failed to send message. Please try again.';
            console.error('Error sending email:', error);
          },
          complete: () => {
            this.isSubmitting = false;
            setTimeout(() => {
              this.submitMessage = '';
            }, 5000);
          }
        });
    }
  }
}
