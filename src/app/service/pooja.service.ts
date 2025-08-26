import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Pooja {
  name: string;
  details: string;
  imageUrl:string
  price:number
}

@Injectable({
  providedIn: 'root'
})
export class PoojaService {
  private poojaServices: Pooja[] = [
    { name: 'Satyanarayan Katha', details: 'Details for Satyanarayan Katha...' ,imageUrl:
      "https://sdmntpraustraliaeast.oaiusercontent.com/files/00000000-8784-61fa-97ba-d372c8274925/raw?se=2025-08-26T08%3A35%3A52Z&sp=r&sv=2024-08-04&sr=b&scid=4197b376-88da-5976-a50a-6bea24149486&skoid=0b778285-7b0b-4cdc-ac3b-fb93e8c3686f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-26T07%3A35%3A11Z&ske=2025-08-27T07%3A35%3A11Z&sks=b&skv=2024-08-04&sig=09bXE513QlPiT57mrU/MaFvjS%2B6wY5tY8rzDDOoI0bo%3D", price:677
    },
    { name: 'Mundan', details: 'Details for Mundan...', imageUrl:
      "https://sdmntpraustraliaeast.oaiusercontent.com/files/00000000-8784-61fa-97ba-d372c8274925/raw?se=2025-08-26T08%3A35%3A52Z&sp=r&sv=2024-08-04&sr=b&scid=4197b376-88da-5976-a50a-6bea24149486&skoid=0b778285-7b0b-4cdc-ac3b-fb93e8c3686f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-26T07%3A35%3A11Z&ske=2025-08-27T07%3A35%3A11Z&sks=b&skv=2024-08-04&sig=09bXE513QlPiT57mrU/MaFvjS%2B6wY5tY8rzDDOoI0bo%3D" , price:677},
    { name: 'Janeu', details: 'Details for Janeu...', imageUrl:
      "https://sdmntpraustraliaeast.oaiusercontent.com/files/00000000-8784-61fa-97ba-d372c8274925/raw?se=2025-08-26T08%3A35%3A52Z&sp=r&sv=2024-08-04&sr=b&scid=4197b376-88da-5976-a50a-6bea24149486&skoid=0b778285-7b0b-4cdc-ac3b-fb93e8c3686f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-26T07%3A35%3A11Z&ske=2025-08-27T07%3A35%3A11Z&sks=b&skv=2024-08-04&sig=09bXE513QlPiT57mrU/MaFvjS%2B6wY5tY8rzDDOoI0bo%3D" , price:677},
  ];

  getPoojaServices(): Observable<Pooja[]> {
    return of(this.poojaServices);
  }
}
