import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  apiUrl: string = 'http://localhost:8080/articles';
  constructor(private http: HttpClient) {}

  getArticle(categorieId: string): Observable<any> {
    if (categorieId != '0') {
      return this.http.get(`${this.apiUrl}/cat?cat=${categorieId}`);
    }
    return this.http.get(`${this.apiUrl}`);
  }

  deleteArticle(id: string) {
    //   const options = {
    //     headers: this._headers,
    //     body: JSON.stringify(user)
    //  };
    console.log(`${this.apiUrl}/${id}`);
    this.http
      .delete(`${this.apiUrl}/${id}`)
      .subscribe(() => console.log('Delete successful'));
  }
}
