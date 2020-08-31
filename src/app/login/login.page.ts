import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit{
  user: User = new User();

  showPassword = false;
  passwordToggleIcon='eye';


  constructor(private router: Router, private authSvc: AuthService) {}

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

  async onLogin() {
    const user = await this.authSvc.onLogin(this.user);
    if (user) {
      console.log('successuflly login');
      this.router.navigateByUrl('/');
    }


  }
}

