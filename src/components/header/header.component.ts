
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports:[]
})
export class HeaderComponent {
  navItems = signal(['Botanas', 'Promociones', 'Nosotros', 'Carta']);

  getInfo(){
    window.open("https://wa.me/524442038808?text=Hola,%20quisiera%20más%20información%20sobre%20el%20botanero", '_blank')
  }
}
