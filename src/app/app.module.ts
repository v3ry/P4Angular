import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';
import { NewsComponent } from './components/news/news.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './page/contact/contact.component';
import { HistoriqueComponent } from './page/historique/historique.component';
import { TodoComponent } from './page/todo/todo.component';
import { AdminComponent } from './page/admin/admin.component';
import { ListArticleComponent } from './components/list-article/list-article.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ToasterComponent } from './components/toaster/toaster.component';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './components/toast/toast.component';
import { MatIconModule } from '@angular/material/icon';
import { UpdateArticleComponent } from './update-article/update-article.component';

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
    AddArticleComponent,
    ToasterComponent,
    ToastComponent,
    UpdateArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
