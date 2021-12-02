
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
// import  {EventEmitter} from 'events'; 
// import { UserDataService } from 'src/app/Services/user-data.service';
// import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @Output() childToParent = new EventEmitter();
  // childData:any = "ok";

  requiredForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
  });
  //onsubmit(data: any) {
  //console.log(data.value);
  //}
  //constructor( private route:Router) {
  //}
  constructor(
    private _userService: AuthService,
    private router: Router
  ) { }
  onSubmit() {
    this._userService.loginUser(this.requiredForm.value).subscribe(data => {
      console.log("subData::", data.status);
      if(data.status==200){
        this.router.navigate(['dashboard'])
      }

    });
      // this.childData= data;
      // console.log(this.user.userInfo.email);

      
      // if (data.is_active == true) {
      //     this.router.navigate(['/dashboard']);
      //     localStorage.setItem("userData", JSON.stringify(data))
      //     localStorage.setItem("token", data.token)
      //     this.childToParent.emit(data)
      //   }
      //   else {
      //       // window.location.href = "/login";
      //       console.log("error");
          
      //     }
          
          // }
          // )
          
        console.log("data::",this.requiredForm.value);
  }
  ngOnInit() { }
}