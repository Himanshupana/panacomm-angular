import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _userService:AuthService) { }

  requiredForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@panamoure+\.com$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    job_profile: new FormControl(''),
    department: new FormControl('')
  });

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.requiredForm.value);
    this._userService.registerUser(this.requiredForm.value).subscribe(data => {
      console.log("subData::", data);
    });
  }

}
