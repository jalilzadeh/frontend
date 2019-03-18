import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContantMeComponent } from './contant-me/contant-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MyBioComponent } from './my-bio/my-bio.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contact-me', component: ContantMeComponent },
  { path: 'my-projects', component: MyProjectsComponent },
  { path: 'my-biography', component: MyBioComponent },
  { path: 'news', component: NewsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
