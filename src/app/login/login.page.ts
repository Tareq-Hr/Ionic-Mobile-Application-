import { Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
showPassword = false;
passwordToggleIcon='eye';


constructor() { 
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
}

