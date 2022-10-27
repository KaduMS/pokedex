import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent {
  @Input()
  pokemon!: string;

  @Input()
  pokeId!: number;

  @Input()
  image!: string

  getPokeId(pokeId: number) {
    const formatedNumber = this.leadingZero(this.pokeId);

    return formatedNumber;
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }
}
