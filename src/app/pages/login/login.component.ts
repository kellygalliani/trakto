import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    // Acessando os valores dos campos de email e senha
    const email = this.loginForm.get('email')!.value;
    const senha = this.loginForm.get('senha')!.value;
    // Ou acessando todos os valores do formulário de uma vez
    const formValues = this.loginForm.value;

    // Fazendo algo com os valores do formulário
    console.log(email, senha);
    console.log(formValues);
  }
}
