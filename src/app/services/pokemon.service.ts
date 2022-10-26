import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../types/pokemon.type';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons: Pokemon[] = [];
  constructor(private httpClient: HttpClient) {
    this.loadingPokemons();
  }
  async loadingPokemons() {
    const request = await this.httpClient
      .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .toPromise();

    this.pokemons = request.results;

    console.log(this.pokemons['1'])
    console.log(this);
  }
}
