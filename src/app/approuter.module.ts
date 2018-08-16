import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as pages from './pages/';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: pages.HomeComponent},
  {path: 'registration', component: pages.RegistComponent},
  {path: 'Page1', component: pages.Page1Component},
  {path: 'Page2', component: pages.Page2Component},
  {path: 'Page3', component: pages.Page3Component},
  {path: 'login', component: pages.LoginComponent},
  { path: 'admin', component: pages.AdmincoverComponent,
    children: [
      {path: 'side', component: pages.AdminsideComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class ApproutingModule {

}
