import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { DashboardAppComponent } from './dashboard-app/dashboard-app.component';
import { DashboardWebComponent } from './dashboard-web/dashboard-web.component';
import { AuthGuard } from './shared/guard/auth.guard';


const routes: Routes = [
  {path : '' ,  redirectTo: '/dashboard', pathMatch: 'full'},
  // for App
  // {path : 'dashboard', component :DashboardAppComponent, data : {title : "SpaceTeleinfra | Dashboard"}},
  // for Web
  {path : 'dashboard', component :DashboardWebComponent, data : {title : "SpaceTeleinfra | Dashboard"} },
  // {path : 'dashboard', component :DashboardWebComponent, data : {title : "SpaceTeleinfra | Dashboard"}, canActivate: [AuthGuard]},

  {path : 'access-denied' ,  component : AccessDeniedComponent, data : {title : "SpaceTeleinfra | Access Denied"}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
