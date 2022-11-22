import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css'],
})
export class ListArticleComponent implements OnInit {
  news: any = {};
  // constructor(private articleService: ArticleService) {}
  constructor(private articleService: ArticleService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit(): void {
    this.articleService.getArticle('0').subscribe((article) => {
      this.news = article;
      console.log(this.news);
    });
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async handleDelete(id: string): Promise<void> {
    this.articleService.deleteArticle(id);
    console.log('deletetitititit' + id);
    await this.delay(1000);
    this.router.navigateByUrl('/admin');
  }
}
