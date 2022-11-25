import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FullBannerComponent } from './shared/full-banner/full-banner.component';
import { ListTitlesComponent } from './shared/list-titles/list-titles.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TitleComponent } from './shared/list-titles/title/title.component';
import { ModalTermosComponent } from './shared/modal-termos/modal-termos.component';
import { MinhaListaComponent } from './shared/minha-lista/minha-lista.component';
import { Error404Component } from './pages/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FullBannerComponent,
    ListTitlesComponent,
    FooterComponent,
    TitleComponent,
    ModalTermosComponent,
    MinhaListaComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
