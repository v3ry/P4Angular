import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  news: any = {};

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService
      .getArticle('3')
      .subscribe((article) => (this.news = article));
  }
}
