import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data: any;
  sProfile: boolean = true;
  isEdit: boolean = true;

  users: any = []
  name: string = "Himanshu Singh"
  email: string = "Himanshu@panamoure.com"
  phone: string = "9786456454"
  address: string = "gurugram"
  myReativeForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  phoneNumber = "^(\\+\\d{1,3}[- ]?)?\\d{10}$";
  i: any;

  // constructor(private _userService:UserProfileService) {
  constructor() {

    this.myReativeForm = new FormGroup({
      "name": new FormControl("", Validators.required),
      "email": new FormControl("", Validators.email),
      "phone": new FormControl("", [Validators.required, Validators.pattern(this.phoneNumber)]),
      "website": new FormControl("", Validators.required)
      // "updateBtn": new FormControl("null")
    });

    // this._userService.users().subscribe(data =>{
    //   this.users = data;

    //   console.log(this.users)
    //   console.log(this.users[0].phone)
    // });
  }

  ngOnInit(): void {
    console.log(this.users)
    // this.users[0] = this._userService.user  
  }

  loadUser() {

    console.log(this.data);

    this.myReativeForm.patchValue(
      {
        name: this.data.first_name + " " + this.users[0].last_name,
        email: this.users[0].email,
        phone: this.users[0].phone,
        website: this.users[0].website
      });

  }

  onSubmit() {
    console.log(this.myReativeForm);
  }
  updateProfile() {
    if (this.isEdit == false) {
      this.isEdit = true
      console.log('ut');

    }
    else
      this.isEdit = false
  }

  showProfile() {

    if (this.sProfile == false) {
      this.sProfile = true
      this.isEdit = true

      console.log('st');



    }
    else
      this.sProfile = false
    this.loadUser()
  }

}
