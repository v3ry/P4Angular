import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';
import { NewsComponent } from './news/news.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './page/contact/contact.component';
import { HistoriqueComponent } from './page/historique/historique.component';
import { TodoComponent } from './page/todo/todo.component';
import { AdminComponent } from './page/admin/admin.component';
import { ListArticleComponent } from './components/list-article/list-article.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AccueilComponent,
    DarkModeToggleComponent,
    NewsComponent,
    WeatherComponent,
    ContactComponent,
    HistoriqueComponent,
    TodoComponent,
    AdminComponent,
    ListArticleComponent,
    ContactListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
