import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NavPageComponent } from './components/nav-page/nav-page.component';
import { NavSideComponent } from './components/nav-side/nav-side.component';
import { NavItensComponent } from './components/nav-itens/nav-itens.component';
import { ItensFooterComponent } from './components/itens-footer/itens-footer.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavPageComponent,
    NavSideComponent,
    NavItensComponent,
    ItensFooterComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
