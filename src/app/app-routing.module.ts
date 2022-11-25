import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { MinhaListaComponent } from './shared/minha-lista/minha-lista.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'minha-lista', component: MinhaListaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**', component: Error404Component
  },
  { path: 'admin', component: AdminComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
