import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root', // Service is available application-wide
})
export class ToastService {
  constructor(
    private toastr: ToastrService, // Inject ngx-toastr service
  ) {}

  // Show toast notification using ngx-toastr
  showToast(
    message: string,
    type: 'success' | 'error' | 'info' | 'warning' = 'info' // Default type is 'info'
  ) {
    switch (type) {
      case 'success':
        this.toastr.success(message, 'Success'); // Success toast
        break;
      case 'error':
        this.toastr.error(message, 'Error'); // Error toast
        break;
      case 'info':
        this.toastr.info(message, 'Info'); // Info toast
        break;
      case 'warning':
        this.toastr.warning(message, 'Warning'); // Warning toast
        break;
      default:
        this.toastr.info(message, 'Notification'); // Default toast
    }
  }


}
