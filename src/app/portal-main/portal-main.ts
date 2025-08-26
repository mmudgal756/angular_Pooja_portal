import { Component } from '@angular/core';
import { PoojaComponent } from '../pooja/puja';
import { SamagriOrderComponent } from "../samagri-order/samagri-order";

@Component({
  selector: 'app-portal-main',
  imports: [PoojaComponent, SamagriOrderComponent],
  templateUrl: './portal-main.html',
  styleUrl: './portal-main.css'
})
export class PortalMainComponent {

}
