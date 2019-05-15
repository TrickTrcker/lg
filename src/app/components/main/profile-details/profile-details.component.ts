import { Component, OnInit } from '@angular/core';
import { User } from './../../../models/user/user';
import { CommonService } from './../../../services/common.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { FormBuilder, FormGroup, FormControl, Validators, EmailValidator, FormArray, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'lga-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  userInfo: any;
  profileUpdateForm: FormGroup;
  profileUpdateFormErrorObject: any = {};
  constructor( private MessageService: MessageService,
    private formBuilder: FormBuilder, private CommonService: CommonService) { }


  ngOnInit() {
    // this.userInfo = this.userService.getUser();
    this.userInfo  = {
      uid : "",
      username: "Saravanakumar",
      email: "Saravana1907@gmail.com",
      firstName: "Saravanakumar",
      lastName: "K",
      gender: 0,
      occupation: "Software Engineer",
      companyname: "TrickyTeam",
      phonenumber: "+919500636039",
      address: "42,TN Palayam",
      city: "Coimbatore",
      state: "TamilNadu",
      pincode: "641047",
      linkedin_url: "",
      facebook_url: "",
      twitter_url:"",
      instagram_url: ""
    };
    console.log("user info", this.userInfo);
    this.buildProfileForm();
  }
  buildProfileForm() {
    this.profileUpdateForm = this.formBuilder.group({
      username: new FormControl('', { validators: Validators.required }),
      email: new FormControl('', { validators: Validators.required }),
      firstName: new FormControl('', { validators: Validators.required }),
      lastName: new FormControl('', { validators: Validators.required }),
      gender: new FormControl(''),
      occupation: new FormControl(''),
      companyname: new FormControl(''),
      phonenumber: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      pincode: new FormControl(''),
      linkedin_url: new FormControl(''),
      facebook_url: new FormControl(''),
      twitter_url: new FormControl(''),
      instagram_url: new FormControl('')
    });
    this.buildFormErrorobject();
    this.profileUpdateForm = this.CommonService.mappingFormData(this.profileUpdateForm, this.userInfo);
  }
  buildFormErrorobject() {
    this.profileUpdateFormErrorObject = {
      username: { required: "Username is required", },
      email: { required: "Email is required", },
      firstName: { required: "First Name is required", },
      lastName: { required: "Last Name is required", }
    };
  }
  onSubmitProfile() {
    if (this.profileUpdateForm.status == "INVALID") {
      var errorMessage = this.CommonService.getFormErrorMessage(this.profileUpdateForm, this.profileUpdateFormErrorObject);
      this.MessageService.add({ severity: 'error', summary: 'Error', detail: errorMessage });
      return false;
    }
    else {
      var formdata = this.profileUpdateForm.getRawValue();
    }
  }
}
