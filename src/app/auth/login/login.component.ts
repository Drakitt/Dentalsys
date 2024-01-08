import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.services';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoggedIn = false;
  isLoginFailed = false;
  public submitted = false;
  form: FormGroup;
  errorMessage = '';
constructor(private authService: AuthService,
  private router: Router,
  private formBuilder: FormBuilder,  ){
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(1)]]
    });
}
onSubmit(): void {
  this.submitted = true;
  if (this.form.valid) {
    console.log(this.form.value)
    this.authService.authenticate(this.form.value).subscribe(
      response => {
        console.log(response)
        this.authService.saveToken(response.token);
        this.authService.saveRefresh(response.refreshToken);
        this.authService.updateLoginStatus(true)
        this.reloadPage();
      },
      error => {
        this.errorMessage = error;
        this.isLoginFailed = true;
      }
    );
  }
}

reloadPage(): void {
   this.router.navigate(['/pacientes']);
 }
}
