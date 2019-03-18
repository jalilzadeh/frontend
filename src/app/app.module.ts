import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root-app/app.component';
import { MaterialModule } from './app.materials';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContantMeComponent } from './contant-me/contant-me.component';
import { NewsComponent } from './news/news.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MyBioComponent } from './my-bio/my-bio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    HomePageComponent,
    AboutMeComponent,
    ContantMeComponent,
    NewsComponent,
    MyProjectsComponent,
    GalleryComponent,
    MyBioComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
