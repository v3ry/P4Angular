import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { ToastService } from 'src/app/services/toast.service';

export class Message {
  constructor(
    public mail: string,
    public message: string,
    public name: string,
    public title: string,
    public date: string = new Date().toISOString()
  ) {}
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  model: Message = new Message('', '', '', '', '');
  constructor(
    private messageService: MessageService,
    private router: Router,
    private toastService: ToastService
  ) {
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
    this.messageService.postMessage(this.model).subscribe((article) => {
      this.toastService.showSuccessToast('Success', 'Message envoyé.');
      console.log(article);
    });
    await this.delay(1000);
    this.router.navigateByUrl('/contact');
  }
}
