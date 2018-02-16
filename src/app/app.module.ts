import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
/**
 * 
 */
/*
import { FooterComponent } from './shared/components/footer-csohub/footer.component';
import { HeaderComponent } from './shared/components/header-csohub/header.component';
*/
import { MainDipPageComponent } from './dip/components/main-dip-page/main-dip-page.component';
import { MainPlatformPageComponent } from './platform/components/main-platform-page/main-platform-page.component';
import { SecondDipPageComponent } from './dip/components/second-dip-page/second-dip-page.component';
import { SecondPlatformPageComponent } from './platform/components/second-platform-page/second-platform-page.component';

import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

import { MyDealsComponent } from './platform/components/my-deals/my-deals.component';
import { AllDealsComponent } from './platform/components/all-deals/all-deals.component';
import { MethodologyComponent } from './platform/components/methodology/methodology.component';
import { LearninganddevelopmentComponent } from './platform/components/learninganddevelopment/learninganddevelopment.component';
import { InitiativesComponent } from './platform/components/initiatives/initiatives.component';
import { QuickToolsComponent } from './platform/components/quick-tools/quick-tools.component';
import { AllToolsComponent } from './platform/components/all-tools/all-tools.component';
import { DealService } from './platform/components/services/deal.service';
import { FollowedDealService } from './platform/components/services/followed-deal.service';
import { InactiveDealService } from './platform/components/services/inactive-deal.service';
import { HttpClientModule } from '@angular/common/http';
import { DealComponent } from './platform/components/deal/deal.component';
import { SidebarComponent } from './platform/components/sidebar/sidebar.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AnnouncementComponent } from './platform/components/announcement/announcement.component';
import { AnouncementComponent } from './platform/components/anouncement/anouncement.component';


@NgModule({
  declarations: [
    AppComponent,
    
    MainDipPageComponent,
    MainPlatformPageComponent,
    SecondDipPageComponent,
    SecondPlatformPageComponent,

    HeaderComponent, FooterComponent, MyDealsComponent, AllDealsComponent, MethodologyComponent, LearninganddevelopmentComponent, 
    InitiativesComponent, QuickToolsComponent, AllToolsComponent, AnnouncementComponent,SidebarComponent,DealComponent, AnouncementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    HttpModule,HttpClientModule,
    NgxPaginationModule
  ],
  providers: [DealService,FollowedDealService,InactiveDealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
