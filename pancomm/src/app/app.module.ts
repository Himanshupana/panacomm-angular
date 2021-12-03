import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { AskquestionComponent } from './dashboard/askquestion/askquestion.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { QuestionsComponent } from './homepage/questions/questions.component';
import { AnswersComponent } from './homepage/answers/answers.component';
import { DynamicFormComponent } from './dynamicform/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    AskquestionComponent,
    HomepageComponent,
    DashboardComponent,
    QuestionsComponent,
    AnswersComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
