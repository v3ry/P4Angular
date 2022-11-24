import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../components/add-article/add-article.component';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  apiUrl: string = 'http://82.65.82.1:8080/articles';

  constructor(private http: HttpClient) {}

  getArticle(categorieId: string): Observable<any> {
    if (categorieId != '0') {
      return this.http.get(`${this.apiUrl}/cat?cat=${categorieId}`);
    }
    return this.http.get(`${this.apiUrl}`);
  }

  getOneArticle(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  postArticle(article: Article): Observable<any> {
    let adminStored: string = localStorage.getItem('pass') || '';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: adminStored,
    });
    let options = { headers: headers };
    console.log(article);
    return this.http.post(`${this.apiUrl}`, article, options);
  }

  putArticle(article: Article, id: number): Observable<any> {
    let adminStored: string = localStorage.getItem('pass') || '';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: adminStored,
    });
    let options = { headers: headers };
    console.log(article);
    return this.http.put(`${this.apiUrl}/${id}`, article, options);
  }

  deleteArticle(id: string) {
    let adminStored: string = localStorage.getItem('pass') || '';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: adminStored,
    });
    let options = { headers: headers };

    this.http
      .delete(`${this.apiUrl}/${id}`, options)
      .subscribe(() => console.log('Delete successful'));
  }
}
