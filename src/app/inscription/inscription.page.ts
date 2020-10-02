import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';

import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  login: FormGroup;
  showPassword = false;
  loading: any;
  user: User = new User();
  passwordToggleIcon='eye';
  showPassword1 = false;
  passwordToggleIcon1='eye';
  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(public alertCtrl: AlertController, private authSvc: AuthService, private router: Router, private fb: FormBuilder) {

        this.login = this.fb.group({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                //Validators.maxLength(20),
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(8),
                //Validators.maxLength(20),
                Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')
            ])),
        });



  }
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  ngOnInit() {}
  formSubmit(login) {
        console.log('test: ', login);
  }

  togglePasswordText() {
        console.log('togglePasswordText: ', this.showPassword);

        this.showPassword = !this.showPassword;
    }


  togglePassword(): void {
    this.showPassword = this.showPassword;

    if(this.passwordToggleIcon == 'eye'){
        this.showPassword = true;
        this.passwordToggleIcon = 'eye-off';
    }else{
        this.showPassword = false;
        this.passwordToggleIcon = 'eye';
    }

  }
  togglePassword1(): void {
    this.showPassword1 = this.showPassword1;

    if(this.passwordToggleIcon1 == 'eye'){
        this.showPassword1 = true;
        this.passwordToggleIcon1 = 'eye-off';
    }else{
        this.showPassword1 = false;
        this.passwordToggleIcon1 = 'eye';
    }
    
  }

  async onRegister(){
    const user = await this.authSvc.onRegister(this.user);
    
    if(user) {
      console.log('successuflly');
      this.router.navigateByUrl('/');
    }
  }

  

}