import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
// import { UserinfoComponent } from './auth/userinfo/userinfo.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/public/home',
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: 'userinfo',
  //   component: UserinfoComponent,
  // },
  {
    path: 'admin',
    loadChildren: () =>
    import('./admin/admin.module').then((mod) => mod.AdminModule),
  },
   {
    path: 'public',
    loadChildren: () =>
    import('./public/public.module').then((mod) => mod.PublicModule),
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
