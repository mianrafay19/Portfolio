import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { GoogleSheetService } from '../../services/google-sheet/google-sheet.service';
import { ToastService } from '../../services/toaster/toast.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private googleSheetService = inject(GoogleSheetService);
  private toast = inject(ToastService);

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  formSubmitted = false;
  isLoading = false;



  get f() {
    return this.contactForm.controls;
  }

 onSubmit() {
  this.formSubmitted = true;
  if (this.contactForm.invalid) return;

  this.isLoading = true;

  this.googleSheetService.submitForm(this.contactForm.value)
    .then(() => {
      this.toast.showToast('Message sent successfully!', 'success');
      this.contactForm.reset();
      this.formSubmitted = false;
    })
    .catch(() => {
      this.toast.showToast('Something went wrong. Please try again.', 'error');
    })
    .finally(() => {
      this.isLoading = false;
    });
}



  showInputError(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || this.formSubmitted)
    );
  }

  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);
    if (!control || !control.errors) return '';

    if (control.errors['required']) return 'This field is required';
    if (control.errors['email']) return 'Please enter a valid email';
    if (control.errors['minlength']) {
      return `Minimum length is ${control.errors['minlength'].requiredLength} characters`;
    }

    return '';
  }
}
