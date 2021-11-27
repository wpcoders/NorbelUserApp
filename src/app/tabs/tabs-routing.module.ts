import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../brewed-down/brewed-down.module').then(m => m.BrewedDownPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../all-cafes/all-cafes.module').then(m => m.AllCafesPageModule)
     
      },
      {
        path: 'qr-code',
        loadChildren: () => import('../qr-code/qr-code.module').then( m => m.QrCodePageModule)
      },
      {
        path: 'cafe-menu',
        loadChildren: () => import('../cafe-menu/cafe-menu.module').then( m => m.CafeMenuPageModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('../contact-us/contact-us.module').then( m => m.ContactUsPageModule)
      },
      {
        path: 'my-account',
        loadChildren: () => import('../my-account/my-account.module').then( m => m.MyAccountPageModule)
      },
      {
        path: 'report-an-issue',
        loadChildren: () => import('../report-an-issue/report-an-issue.module').then( m => m.ReportAnIssuePageModule)
      },
      {
        path: 'verification',
        loadChildren: () => import('../verification/verification.module').then( m => m.VerificationPageModule)
      },
      {
        path: 'booking-success',
        loadChildren: () => import('../booking-success/booking-success.module').then( m => m.BookingSuccessPageModule)
      },
      {
        path: 'birthday-coffee',
        loadChildren: () => import('../birthday-coffee/birthday-coffee.module').then( m => m.BirthdayCoffeePageModule)
      },
      {
        path: 'notification-more-information',
        loadChildren: () => import('../notification-more-information/notification-more-information.module').then( m => m.NotificationMoreInformationPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
