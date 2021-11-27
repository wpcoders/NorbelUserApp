import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/welcome',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  
  {
    path: 'brewed-down',
    loadChildren: () => import('./brewed-down/brewed-down.module').then( m => m.BrewedDownPageModule)
  },

  {
    path: 'network',
    loadChildren: () => import('./network/network.module').then( m => m.NetworkPageModule)
  },
  
  {
    path: 'legal-page',
    loadChildren: () => import('./legal-page/legal-page.module').then( m => m.LegalPagePageModule)
  },
  {
    path: 'table-reservation',
    loadChildren: () => import('./table-reservation/table-reservation.module').then( m => m.TableReservationPageModule)
  },
  {
    path: 'notification-more-information',
    loadChildren: () => import('./notification-more-information/notification-more-information.module').then( m => m.NotificationMoreInformationPageModule)
  },
  {
    path: 'all-cafes',
    loadChildren: () => import('./all-cafes/all-cafes.module').then( m => m.AllCafesPageModule)
  },
  
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
  },
  {
    path: 'side-menu',
    loadChildren: () => import('./side-menu/side-menu.module').then( m => m.SideMenuPageModule)
  },
  {
    path: 'network',
    loadChildren: () => import('./network/network.module').then( m => m.NetworkPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
