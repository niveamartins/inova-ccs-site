import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makePopUps(data: any, index): string {
    const dado = data[index];
    return `` +
    `<div>${ dado.Nome }</div> `;
  }
}
