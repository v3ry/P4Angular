import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  news: any = {};
  // constructor(private articleService: ArticleService) {}
  constructor(private messageService: MessageService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit(): void {
    this.messageService.getMessage().subscribe((article) => {
      this.news = article;
      console.log(this.news);
    });
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async handleDelete(id: string): Promise<void> {
    this.messageService.deleteMessage(id);
    console.log('deletetitititit' + id);
    await this.delay(1000);
    this.router.navigateByUrl('/admin');
  }
}
