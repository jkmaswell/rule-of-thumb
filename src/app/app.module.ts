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
import { VoteComponent } from './states/home/components/vote/vote.component';
import { VotesService } from './services/votes.service';
import { LocalStorageService } from './services/local-storage.service';
import { FooterComponent } from './states/home/components/footer/footer.component';
import { SubmitBannerComponent } from './states/home/components/submit-banner/submit-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    MenuComponent,
    ToastrBannerComponent,
    VoteComponent,
    FooterComponent,
    SubmitBannerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [
    VotesService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
