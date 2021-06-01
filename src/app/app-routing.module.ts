import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//import { HomeComponent } from './pages/home/home.component';
//import { ChatPageModule } from './pages/chat/chat.page';
//import { CalendarPageModule } from './pages/calendar/calendar.page';

const routes: Routes = [
   {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/GeneralAdmin/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'admin-desk',
    loadChildren: () => import('./pages/GeneralAdmin/admin-desk/admin-desk.module').then( m => m.AdminDeskPageModule)
  },
  {
    path: 'license',
    loadChildren: () => import('./pages/GeneralAdmin/license/license.module').then( m => m.LicensePageModule)
  },
  {
    path: 'login-admin',
    loadChildren: () => import('./pages/GeneralAdmin/login-admin/login-admin.module').then( m => m.LoginAdminPageModule)
  },
  {
    path: 'obtain-license',
    loadChildren: () => import('./pages/GeneralAdmin/obtain-license/obtain-license.module').then( m => m.ObtainLicensePageModule)
  },
  {
    path: 'obtain-license',
    loadChildren: () => import('./pages/GeneralAdmin/obtain-license/obtain-license.module').then( m => m.ObtainLicensePageModule)
  },
  {
    path: 'register-admin',
    loadChildren: () => import('./pages/GeneralAdmin/register-admin/register-admin.module').then( m => m.RegisterAdminPageModule)
  },
  {
    path: 'requests',
    loadChildren: () => import('./pages/GeneralAdmin/requests/requests.module').then( m => m.RequestsPageModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./pages/GeneralAdmin/teams/teams.module').then( m => m.TeamsPageModule)
  },
  {
    path: 'update-form',
    loadChildren: () => import('./pages/GeneralAdmin/update-form/update-form.module').then( m => m.UpdateFormPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/GeneralAdmin/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/GeneralUser/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/GeneralUser/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'login-user',
    loadChildren: () => import('./pages/GeneralUser/login-user/login-user.module').then( m => m.LoginUserPageModule)
  },
  {
    path: 'register-user',
    loadChildren: () => import('./pages/GeneralUser/register-user/register-user.module').then( m => m.RegisterUserPageModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./pages/GeneralUser/teams/teams.module').then( m => m.TeamsPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/GeneralUser/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'user-company',
    loadChildren: () => import('./pages/GeneralUser/user-company/user-company.module').then( m => m.UserCompanyPageModule)
  },
  {
    path: 'user-desk',
    loadChildren: () => import('./pages/GeneralUser/user-desk/user-desk.module').then( m => m.UserDeskPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
     { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
