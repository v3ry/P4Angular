import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
})
export class AddArticleComponent implements OnInit {
  model2: Categorie = new Categorie(0, '');
  model: Article = new Article('', '', '', '', this.model2);

  constructor(private articleService: ArticleService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit(): void {}

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async onSubmit(): Promise<void> {
    console.log('Formulaire envoyé !');
    const now = new Date();
    const date = `${now.getDate()}/${
      now.getMonth() + 1
    }/${now.getFullYear()} ${now.getHours()}h${now.getMinutes()}`;
    console.log(date);
    this.model.date = date;
    this.articleService
      .postArticle(this.model)
      .subscribe((article) => console.log(article));
    await this.delay(1000);
    this.router.navigateByUrl('/admin');
  }

  onChange(): void {
    console.log('cat ' + this.model.categorie);
  }
}
export class Article {
  constructor(
    public date: string,
    public description: string,
    public picture: string,
    public title: string,
    public categorie: Categorie
  ) {}
}

export class Categorie {
  constructor(public id: number, public title: string) {}
}
