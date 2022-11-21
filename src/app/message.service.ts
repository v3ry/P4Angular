import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './page/contact/contact.component';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  apiUrl: string = 'http://localhost:8080/messages';
  constructor(private http: HttpClient) {}

  getMessage(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  postMessage(message: Message): Observable<any> {
    return this.http.post(`${this.apiUrl}`, message);
  }

  deleteMessage(id: string) {
    console.log(`${this.apiUrl}/${id}`);
    this.http
      .delete(`${this.apiUrl}/${id}`)
      .subscribe(() => console.log('Delete successful'));
  }
}
