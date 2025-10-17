import { Component } from '@angular/core';
import { WarningModalComponent } from "../../components/warning-modal/warning-modal";
import { LoginService } from '../login-service';
import { Router } from '@angular/router';
import { FormsModule } from "@angular/forms"

@Component({
  selector: 'app-login',
  imports: [WarningModalComponent, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  credentials = {
    username: '',
    password: ''
  };

  showWarningModal: boolean = true;
  loginError: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  onModalClose(): void{
    this.showWarningModal = false;
  }

  handleLogin(): void {
    this.loginError = false;
    if (!this.credentials.username || !this.credentials.password) {
        this.loginError = true;
        return;
    }

    this.loginService.login(this.credentials).subscribe({
      next: (response) => {
        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/boards']);
      },
      error: (err) => {
        console.error('Error en el login:', err);
        this.loginError = true;
      }
    });
  }
}
