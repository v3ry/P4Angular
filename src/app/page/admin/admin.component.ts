import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  adminPass: string = '';
  adminStored: any = localStorage.getItem('pass');
  // JSON.parse(localStorage.getItem('pass') || '');
  constructor() {}

  ngOnInit(): void {
    console.log(this.adminStored);
    if (this.adminStored) {
      console.log('yeah');
      this.adminPass = this.adminStored;
    }
  }

  handleInput() {
    console.log('blablabla');
    this.adminStored = localStorage.setItem('pass', this.adminPass);
  }
}
