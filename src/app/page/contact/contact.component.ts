import { Component, OnInit } from '@angular/core';
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
    private toastService: ToastService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('Formulaire envoyé !');
    const now = new Date();
    const date = `${now.getDate()}/${
      now.getMonth() + 1
    }/${now.getFullYear()} ${now.getHours()}h${now.getMinutes()}`;
    console.log(date);
    this.model.date = date;
    this.messageService.postMessage(this.model).subscribe((article) => {
      this.toastService.showSuccessToast('Warning', 'Message envoyé.');
      console.log(article);
    });
  }
}
