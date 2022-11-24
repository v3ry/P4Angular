import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css'],
})
export class HistoriqueComponent implements OnInit {
  news: any = {};

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getArticle('2').subscribe((article) => {
      this.news = article;
      for (let index = 0; index < this.news.length; index++) {
        this.news[index].picture = this.news[index].picture
          .toString()
          .split('|');
      }
      console.log(this.news[0]);
      console.log(typeof this.news[0].picture);
      console.log(typeof this.news[1].picture);
    });
  }

  showModal!: boolean;
  show() {
    this.showModal = true; // Show-Hide Modal Check
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }
}
