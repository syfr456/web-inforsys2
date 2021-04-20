import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { NavComponent } from './nav/nav.component';
import { environment } from '../../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { MessageComponent } from './message/message.component';
import { MatCardModule } from '@angular/material/card';
import { FormComponent } from './form/form.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'blogs',
        component: BlogsComponent,
      },
      {
        path: 'message',
        component: MessageComponent,
      },
      {
        path: 'form',
        component: FormComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [AdminComponent, NavComponent, MessageComponent, FormComponent, BlogsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MaterialDesign,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
  ]
})
export class AdminModule { }
