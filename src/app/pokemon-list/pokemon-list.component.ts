import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../types/pokemon.type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  faSearch = faSearch;
  public getAllPokemons: any;
  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.apiListAllPokemons.subscribe((res) => {
      this.getAllPokemons = res.results;
      console.log(this.getAllPokemons);
    });
  }

  // search(e: Event): void {
  //   const target = e.target as HTMLInputElement;
  //   const value = target.value;

  //   const filter = this.pokemonService.pokemons.filter((res) => {
  //     return !res.name.indexOf(value.toLocaleLowerCase());
  //   });

  //   this.pokemonService.pokemons = filter;
  // }
}
