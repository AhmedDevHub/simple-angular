import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'home' ,pathMatch:'full' },
  {path:'home',component:HomeComponent ,title:'Home'},
  {path:'about',component:AboutComponent,title:'About'},
  {path:'portfolio',component:PortfolioComponent,title:'Portfolio'},
  {path:'contacts',component:ContactComponent,title:'contacts'},
  {path:'**',component:NotfoundComponent,title:'NotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
