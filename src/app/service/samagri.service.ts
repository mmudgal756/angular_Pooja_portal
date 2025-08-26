import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface SamagriProduct {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class SamagriService {

  getSamagriProducts(): Observable<SamagriProduct[]> {
    const dummyProducts: SamagriProduct[] = [
      { id: 1, name: 'Havan Materials', description: 'Complete set for Havan.', imageUrl: 'https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjhhZDYwZWViNzIwODE5MWJiNzg3ZjE1YzE1ODNkN2Y6ZmlsZV8wMDAwMDAwMGI0OTA2MjJmOGU4N2Q5MTU1NDBhMjU3NSIsInRzIjoiNDg3ODMxIiwicCI6InB5aSIsInNpZyI6IjFhZDU3MmMwNGFjN2E4MGI0MjA1ZjlhNjM5MWQ4NjM0ZWY4MjNiNTNmYWViY2NjZDAxOGExNGJlOWRhMWFjZjEiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ==', price: 500 },
      { id: 2, name: 'Agarbatti', description: 'Fragrant incense sticks.', imageUrl: 'https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjhhZDYwZWViNzIwODE5MWJiNzg3ZjE1YzE1ODNkN2Y6ZmlsZV8wMDAwMDAwMGI0OTA2MjJmOGU4N2Q5MTU1NDBhMjU3NSIsInRzIjoiNDg3ODMxIiwicCI6InB5aSIsInNpZyI6IjFhZDU3MmMwNGFjN2E4MGI0MjA1ZjlhNjM5MWQ4NjM0ZWY4MjNiNTNmYWViY2NjZDAxOGExNGJlOWRhMWFjZjEiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ==', price: 100 },
      { id: 3, name: 'Dhoop Batti', description: 'Aromatic dhoop sticks.', imageUrl: 'https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjhhZDYwZWViNzIwODE5MWJiNzg3ZjE1YzE1ODNkN2Y6ZmlsZV8wMDAwMDAwMGI0OTA2MjJmOGU4N2Q5MTU1NDBhMjU3NSIsInRzIjoiNDg3ODMxIiwicCI6InB5aSIsInNpZyI6IjFhZDU3MmMwNGFjN2E4MGI0MjA1ZjlhNjM5MWQ4NjM0ZWY4MjNiNTNmYWViY2NjZDAxOGExNGJlOWRhMWFjZjEiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ==', price: 150 },
    ];
    return of(dummyProducts);
  }
}
