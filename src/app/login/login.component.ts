import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service'
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  submited =false
  constructor(private fb: FormBuilder, private api: ApiService,
    private router: Router, private activatedRoute: ActivatedRoute) { 
    this.loginForm = this.fb.group({
      // email: ['', [Validators.required, Validators.email]],
      password: ['',Validators.required],
      email: [
        '',
        [
          Validators.required,
          // Validators.email,
          // Validators.maxLength(20)
        ]
      ]
    
      })
  }

  ngOnInit(): void {
  }
  get f() { return this.loginForm.controls; }

  onSubmit(data:any) {
    this.submited = true;
    console.log('runn 2234',this.loginForm.invalid)
    if (this.loginForm.invalid) {
    //  this.submited = false;
     return;
    }
    // if(data.email == 'admin@gmail.com' && data.password == '1234567') {

    //   let userdata = {'id':'1', 'name':"test", email:data.email, role:'admin'}
    //   localStorage.setItem('user',JSON.stringify(userdata ));
    //   this.router.navigate(['admin']);


    // } if(data.email == 'test@gmail.com' && data.password == '1234567'){
    //   let userdata = {'id':'1', 'name':"test", email:data.email, role:'user'}
    //   localStorage.setItem('user',JSON.stringify(userdata ));
    //   this.router.navigate(['admin']);
    // } else {
    //   console
    //   this.api.showNotification('error', "invailid credentials");

    // }
    // localStorage.setItem('adminlogin', 'true');
    // localStorage.setItem('user',JSON.stringify(userdata) );
    data['username'] = data.email;
    this.api.postData('/api/N_UserEmployee/Authenticate',data,"POST" ).subscribe(res=> {
      
      if(res.umId ) {
        res['isAdmin'] = true
        // localStorage.setItem('adminlogin', 'true');
        localStorage.setItem('user',JSON.stringify(res) );
        localStorage.setItem('token',res['token'] );
        this.api.showNotification('success', 'Login succesfully.')
        this.router.navigate(['dashbord/appointment']);
      }else{
        this.api.showNotification('error', res['message']);

      }
      
    }) 
  }
}
