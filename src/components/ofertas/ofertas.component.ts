
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfertasComponent {
  ofertas = signal([
    {
      tag: 'PROMOCIÓN DEL MES',
      title: '¡Combo Amigos!',
      description: 'Cubetazo de 6 cervezas + Platón Botanero Mega para compartir.',
      price: 499,
      oldPrice: 750,
      bgClass: 'from-orange-500/10 to-transparent'
    },
    {
      tag: 'FAVORITO DEL BAR',
      title: 'Cubetazo XL',
      description: 'La mejor selección de cervezas nacionales para refrescar tu tarde.',
      price: 350,
      oldPrice: null,
      bgClass: 'from-blue-500/10 to-transparent'
    },
    {
      tag: 'SOLO SÁBADOS',
      title: 'Sábado de Mariscos',
      description: 'Todos los sábados disfruta de nuestro fresco sabor del mar al doble. 2x1 en cócteles.',
      priceText: '2x1',
      price: null,
      oldPrice: null,
      bgClass: 'from-green-500/10 to-transparent'
    }
  ]);
}
