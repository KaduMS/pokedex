import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Pokemon } from '../types/pokemon.type';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  // pokemons: Pokemon[] = [];
  // constructor(private httpClient: HttpClient) {
  //   this.loadingPokemons();
  // }

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'

  constructor(
    private http: HttpClient
  ){ }

  get apiListAllPokemons(): Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap( res => res),
      tap(res => {
        res.results.map((resPokemons: any) => {
          this.apiGetPokemon(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )
        })
      })
    )
  }

  public apiGetPokemon( url: string):Observable<any>{
    return this.http.get<any>( url ).pipe(
      map(
        res => res
      )
    )
  }

  // async loadingPokemons() {
  //   const request = await this.httpClient
  //     .get<any>('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
  //     .toPromise();

    // this.pokemons = request.results;

    // console.log(this.pokemons);
    // console.log(this);
  // }
}