
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-botanas',
  templateUrl: './botanas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage]
})
export class BotanasComponent {
  botanas = signal([
    {
      name: 'Agua chile salseado',     
      price: '0.00 (Incluido con tus bebidas)',
      description: 'Nuestro platillo estrella, prueba el mejor agua chile, picosito y con el puro estilo de Nayarit',
      imageUrl: '/assets/agua_chile_hero.jpg'
    },
    {
      name: 'Coctel de camarón',
      price: '0.00 (Incluido con tus bebidas)',
      description: 'El consentido de todos y al puro estilo de Sinaloa, picosito y sabroso',
      imageUrl: '/assets/coctel_hero.jpg'
    },
    {
      name: 'Ceviche de la Casa',
      price: '0.00 (Incluido con tus bebidas)',
      description: 'El mejor pescado con ensalada y el sazón de la casa',
      imageUrl: 'assets/ceviche_hero.jpg'
    },
    {
      name: 'Camarones al ajo',
      price: '0.00 (Incluido con tus bebidas)',
      description: 'Lo mejor de la comida china y todo su sabor',
      imageUrl: 'assets/al_ajo_hero.jpg'
    },
   
  ]);
}
