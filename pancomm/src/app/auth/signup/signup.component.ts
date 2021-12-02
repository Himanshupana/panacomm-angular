import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { signup } from 'src/app/models/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupModel:any

  constructor(private _userService:AuthService, private router:Router) {
    this.signupModel = signup
   }

  // requiredForm = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@panamoure+\.com$")]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
  //   job_profile: new FormControl(''),
  //   department: new FormControl('')
  // });

  ngOnInit(): void {
  }

  // onSubmit(){
  //   console.log(this.requiredForm.value);
  //   this._userService.registerUser(this.requiredForm.value).subscribe(data => {
  //     console.log("subData::", data);
  //     if (data.status==200) {
  //       this.router.navigate(['/log-in'])
  //     }
  //     else{
  //       console.log('error');
        
  //     }
  //   });
  // }

}



// <div class="main">
//             <div class='header'>
//                 <div class="logo">
//                     <img src="../../assets/img/panamoure-logo.png" alt="" srcset="" width="200px">
//                     <!-- <span id="main-name">Atlas</span> -->
//                 </div>
//                 <!-- <div class="links">
//                     <a href="##"><i class="fab fa-facebook"></i></a>
//                     <a href="##"><i class="fab fa-instagram"></i></a>
//                 </div> -->

//             </div>
//             <div class="center">
//                 <div class="reset-img">
//                     <!-- <img src="./img/password-svgrepo-com.svg" alt="" srcset="" width="100px"> -->

//                     <div class="desc">
//                         <h3>Sign up</h3>
//                     </div>
//                 </div>
//                 <div class="link-desc">
//                     <form [formGroup]="requiredForm" (ngSubmit)="onSubmit()">
//                         <div class="form">
//                             <!-- <div class="label"><label>Name</label></div> -->
//                             <div class="input_field">
//                                 <input type="text" formControlName="name"
//                                     placeholder="name" ngModel>
//                             </div>
//                             <!-- <div class="label"><label>Email</label></div> -->
//                             <div class="input_field">
//                                 <!-- <i class="fa fa-user"></i> -->
//                                 <input type="text" formControlName="email"
//                                     placeholder="admin@panamoure.com" ngModel>
//                             </div>
//                             <div class="error"
//                                 *ngIf="requiredForm.controls['email'].invalid && requiredForm.controls['email'].touched">
//                                 <p> Email required with format</p>
//                             </div>
//                             <!-- <div class="label"><label>Job Profile</label></div> -->
//                             <div class="input_field">
//                                 <input type="text" formControlName="job_profile"
//                                     placeholder="Job profile" ngModel>
//                             </div>
//                             <!-- <div class="label"><label>Department</label></div> -->
//                             <div class="input_field">
//                                 <input type="text" formControlName="department"
//                                     placeholder="department" ngModel>
//                             </div>
//                             <!-- <div class="label"><label>Password</label></div> -->
//                             <div class="input_field">
//                                 <!-- <i class="fa fa-lock"></i> -->
//                                 <input type="password" formControlName="password" placeholder="......"
//                                     ngModel>
//                             </div>
//                             <div class="error"
//                                 *ngIf="requiredForm.controls['password'].invalid && requiredForm.controls['password'].touched">
//                                 <p>please enter valid password </p>
//                             </div>
//                             <!-- <div class="checkbox">
//                                 <input type="checkbox"><span class="span"> Remember me </span>
//                                 <button routerLink="/forget">Forgot password</button>
//                             </div> -->
//                             <div [ngClass]="requiredForm.valid?'':'disabled'" class="btn">
//                                 <button class="button" [disabled]="!requiredForm.valid">Sign In</button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//                 <div class="app-in">
//                     <p>Already have an account? <a routerLink="/log-in">Log in</a></p>
//                     <!-- <div class="social-links"> -->
//                         <!-- <a href="www.google.com"><img src="../../assets/img/google-play-badge.png" width="100" alt=""></a>
//                         <a href="##"><img src="../../assets/img/app-store-png-logo-33107-256x256 .png" width="87" alt=""></a> -->
//                         <!-- <a routerLink="/log-in">Log in</a> -->
//                     <!-- </div> -->
//                 </div>
//                 <div class="gap">

//                 </div>
//             </div>
//             <!-- <div class='footer'>
//                 <div><a href="##">FAQ</a></div>-
//                 <div><a href="##">Privacy policy</a></div>-
//                 <div><a href="##">Contact us</a></div>
//             </div> -->

//         </div>