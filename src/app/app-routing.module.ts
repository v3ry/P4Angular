import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
