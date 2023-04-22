import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
    ) {}

  async onSubmit() {
    const email = this.loginForm.get('email')!.value;
    const senha = this.loginForm.get('password')!.value;
    
    const formValues = this.loginForm.value;

    try {
      const result = await this.loginService.login(formValues)
      if(result) this.router.navigate([''])
    
    } catch (error) {
      console.log(error)
    }
  }
}
