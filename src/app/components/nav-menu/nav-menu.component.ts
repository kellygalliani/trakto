import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  @Input() type!: string;
  isMenuVisible = false;
  currentDate: string;

  constructor(private router: Router) {
    const date = new Date();
    this.currentDate = date.toLocaleDateString('pt-BR');
  }

  goToHome() {
    this.router.navigate(['']);
  }
  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
