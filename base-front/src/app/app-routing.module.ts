import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '@core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {
      breadcrumb: 'Dashboard',
      state: 'Dashboard'
    },
    canActivate: [AuthGuardService]
  },
  {
    path: 'test',
    loadChildren: () => import('./views/test/test.module').then(m => m.TestModule),
    data: {
      breadcrumb: 'Test',
      state: 'Test'
    },
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)
  },
  { path: '**', redirectTo: '', data: {breadcrumb: 'Home'}, canActivate: [AuthGuardService] }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
