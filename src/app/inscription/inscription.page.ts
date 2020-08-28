import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage  {

  showPassword = false;
passwordToggleIcon='eye';

showPassword1 = false;
passwordToggleIcon1='eye';

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


  

}