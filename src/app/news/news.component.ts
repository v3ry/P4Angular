import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news: any = {};

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService
      .getArticle('1')
      .subscribe((article) => (this.news = article));
  }
}
