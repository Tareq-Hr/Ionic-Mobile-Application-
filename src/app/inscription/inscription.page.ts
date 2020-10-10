import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { from } from 'rxjs';
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
                Validators.minLength(8),
                //Validators.maxLength(20),
                //Validators.email,
                Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
            ])),
            password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(8),
                //Validators.maxLength(20),
                Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')
            ])),
            confirmPassword:new FormControl('', Validators.compose([
              Validators.required,  
              Validators.minLength(8)  
            ])),
        });



  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.get('password').value;
  let confirmPass = group.get('confirmPassword').value;
  return pass === confirmPass ? null : { notSame: true }     
}
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
 MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
  async onRegister(){
    const user = await this.authSvc.onRegister(this.user);
    
    if(user) {
      console.log('successuflly');
      this.router.navigateByUrl('login');
    }
    else {
      const alert = await this.alertCtrl.create({ 
       cssClass:'my-custom-class',   
       message: 'E-mail déja existe',  
     });  
     await alert.present();  
     const result = await alert.onDidDismiss();  
     console.log(result);  
  }
  }
  

}