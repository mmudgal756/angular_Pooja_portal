import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';
import { SamagriService } from '../service/samagri.service';

interface SamagriProduct {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

@Component({
  selector: 'app-samagri-order',
  imports: [MatCardModule],
  templateUrl: './samagri-order.html',
  styleUrl: './samagri-order.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SamagriOrderComponent {
  readonly samagriProducts = signal<SamagriProduct[]>([]);

  readonly quantities = signal<Map<number, number>>(new Map());

  private readonly samagriService = inject(SamagriService);

  constructor() {
    this.samagriService.getSamagriProducts().subscribe((products:any) => this.samagriProducts.set(products));
  }
}
