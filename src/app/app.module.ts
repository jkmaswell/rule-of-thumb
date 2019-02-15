import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './states/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './states/home/components/banner/banner.component';
import { MenuComponent } from './states/home/components/menu/menu.component';
import { ToastrBannerComponent } from './states/home/components/toastr-banner/toastr-banner.component';
import { VotesComponent } from './states/home/components/votes/votes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    MenuComponent,
    ToastrBannerComponent,
    VotesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
