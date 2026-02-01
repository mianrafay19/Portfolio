import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleSheetService {
  private scriptUrl =
    'https://script.google.com/macros/s/AKfycbxUq1kum_Tphrcrbrm3Q7FGN7xMHccK04_LsDDx0pRbKXCd28TsLQ9_Vyfc1WnbqjCHxQ/exec';

  submitForm(data: any) {
  const formData = new URLSearchParams();

  for (const key in data) {
    formData.append(key, data[key]);
  }

  return fetch(this.scriptUrl, {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

}
