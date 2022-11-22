import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css'],
})
export class UpdateArticleComponent {
  model2: Categorie = new Categorie(0, '');
  model: Article = new Article('', '', '', '', this.model2);
  id!: number;
  oneNew: any = {};
  private sub: any;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.articleService
        .getOneArticle(this.id.toString())
        .subscribe((article) => {
          this.oneNew = article;
          console.log(this.oneNew);
        });
    });
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async onSubmit(id: number): Promise<void> {
    console.log('Formulaire envoyé !');
    const now = new Date();
    const date = `${now.getDate()}/${
      now.getMonth() + 1
    }/${now.getFullYear()} ${now.getHours()}h${now.getMinutes()}`;
    console.log(date);
    this.model.date = date;
    this.articleService
      .putArticle(this.oneNew, id)
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
