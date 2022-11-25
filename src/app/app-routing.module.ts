import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Error404Component } from './pages/error404/error404.component';
import { MinhaListaComponent } from './shared/minha-lista/minha-lista.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'minha-lista', component: MinhaListaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**', component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
