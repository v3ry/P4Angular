import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../page/contact/contact.component';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  apiUrl: string = 'http://82.65.82.1:8080/messages';
  adminStored: string = localStorage.getItem('pass') || '';

  constructor(private http: HttpClient) {}

  getMessage(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  postMessage(message: Message): Observable<any> {
    return this.http.post(`${this.apiUrl}`, message);
  }

  deleteMessage(id: string) {
    let adminStored: string = localStorage.getItem('pass') || '';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: adminStored,
    });
    let options = { headers: headers };

    console.log(`${this.apiUrl}/${id}`);
    this.http
      .delete(`${this.apiUrl}/${id}`, options)
      .subscribe(() => console.log('Delete successful'));
  }
}
