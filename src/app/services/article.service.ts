import { HttpClient } from '@angular/common/http';
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

  postArticle(article: Article): Observable<any> {
    console.log(article);
    return this.http.post(`${this.apiUrl}`, article);
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
