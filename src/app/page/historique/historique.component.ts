import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css'],
})
export class HistoriqueComponent implements OnInit {
  news: any = {};

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService
      .getArticle('2')
      .subscribe((article) => (this.news = article));
  }
}
