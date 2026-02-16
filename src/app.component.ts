
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { BotanasComponent } from './components/botanas/botanas.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    BotanasComponent,
    OfertasComponent,
    HistoriaComponent,
    TestimonialsComponent,
    FooterComponent
  ]
})
export class AppComponent {}
