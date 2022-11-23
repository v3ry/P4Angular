import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ListArticleComponent } from './components/list-article/list-article.component';
import { AdminComponent } from './page/admin/admin.component';
import { ContactComponent } from './page/contact/contact.component';
import { HistoriqueComponent } from './page/historique/historique.component';
import { HomeComponent } from './page/home/home.component';
import { TodoComponent } from './page/todo/todo.component';
import { UpdateArticleComponent } from './update-article/update-article.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'historique', component: HistoriqueComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/article/:id', component: UpdateArticleComponent },
  { path: 'admin/articlelist', component: ListArticleComponent },
  { path: 'admin/messagelist', component: ContactListComponent },
  { path: 'admin/addarticle', component: AddArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
