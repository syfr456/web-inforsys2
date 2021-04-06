import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { TermsComponent } from './terms/terms.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SofiComponent } from './sofi/sofi.component';
import { PisiComponent } from './pisi/pisi.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CovidComponent } from './covid/covid.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';


const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'career',
        component: CareerComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'covid',
        component: CovidComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'pisi',
        component: PisiComponent,
      },
      {
        path: 'privacy',
        component: PrivacyComponent,
      },
      {
        path: 'sofi',
        component: SofiComponent,
      },
      {
        path: 'terms',
        component: TermsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [PublicComponent, TermsComponent, AboutComponent, ContactComponent, SofiComponent, PisiComponent, PrivacyComponent, CovidComponent, HomeComponent, CareerComponent, NavbarComponent],
  imports: [
   RouterModule.forChild(routes),
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialDesign
  ]
})
export class PublicModule { }
