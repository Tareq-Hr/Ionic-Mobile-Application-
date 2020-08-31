import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  user: User = new User();
  showPassword = false;
  passwordToggleIcon='eye';
  showPassword1 = false;
  passwordToggleIcon1='eye';

  constructor(private authSvc: AuthService, private router: Router) {}

  ngOnInit() {}



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