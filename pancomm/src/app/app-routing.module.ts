import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';

const routes: Routes = [
  { path: '',redirectTo:'home',pathMatch:'full' },
  // { path: '/dash', component: DashboardComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'otp', component: OtpComponent },
  // { path: '**', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
