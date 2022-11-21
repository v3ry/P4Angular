import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dark-mode-toggle',
  template: `      <img src="../../assets/sun.png"/>
  <label class="switch">
    <input type="checkbox" [checked]="darkMode$ | async" (change)="onToggle()">
    <span class="slider round"></span>
  </label>
  <img src="../../assets/moon.png"/>`,
  styleUrls: ['./dark-mode-toggle.component.css']
})

// @Component({
//   selector: 'app-dark-mode-toggle',
//   template: `<input
//     type="checkbox"
//     [checked]="darkMode$ | async"
//     (change)="onToggle()"
//   />`,
//   styleUrls: ['./dark-mode-toggle.component.css']
// })
export class DarkModeToggleComponent{
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) {}

  onToggle(): void {
    this.darkModeService.toggle();
  }
}
