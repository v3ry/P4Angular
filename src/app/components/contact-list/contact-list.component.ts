import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  news: any = {};
  // constructor(private articleService: ArticleService) {}
  constructor(
    private messageService: MessageService,
    private router: Router,
    private toastService: ToastService
  ) {
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
    this.toastService.showErrorToast('Success', 'Message effacé.');
    await this.delay(1000);
    this.router.navigateByUrl('/admin');
  }
}
