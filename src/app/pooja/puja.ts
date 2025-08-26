import { Component, signal, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { PoojaService } from '../service/pooja.service';
import { MatCard, MatCardContent } from "@angular/material/card";
interface poojaServices {
  name: string;
  details: string;
  imageUrl: string;
  price: number;
}

@Component({
  selector: 'app-pooja',
  standalone: true, // Add standalone flag
  imports: [CommonModule, MatCard, MatCardContent], // Add CommonModule here
  templateUrl: './puja.html',
  styleUrl: './puja.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PoojaComponent {

  readonly poojaServices = signal<poojaServices[]>([]);

  //readonly quantities = signal<Map<number, number>>(new Map());

  private readonly poojaService = inject(PoojaService);

  constructor() {
    this.poojaService.getPoojaServices().subscribe((pooja:any) => this.poojaServices.set(pooja));
  }
}
