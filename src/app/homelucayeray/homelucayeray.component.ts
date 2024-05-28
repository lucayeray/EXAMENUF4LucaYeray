import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HabilitatslucayerayComponent} from "../habilitatslucayeray/habilitatslucayeray.component";


@Component({
  selector: 'app-homelucayeray',
  standalone: true,
  imports: [RouterOutlet, NgIf, HttpClientModule, FormsModule, HabilitatslucayerayComponent],
  templateUrl: './homelucayeray.component.html',
  styleUrl: './homelucayeray.component.css'
})
export class HomelucayerayComponent {

  searchQuery: string = '';
  message: string = '';
  pokemonData: any;

  constructor(private http: HttpClient) {
  }

  searchPokemon(): void {
    if (!this.searchQuery.trim()) {
      this.message = 'Por favor, ingresa un nombre o ID de Pokémon.';
      return;
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${this.searchQuery.toLowerCase()}`;

    let message: string;

    new Promise<void>((resolve, reject) => {
      this.getPokemonData(url)
        .then((pokemon: any) => {
          this.pokemonData = pokemon;
          const attackStat = pokemon.stats.find((stat: any) => stat.stat.name === 'attack');
          const attack = attackStat.base_stat;
          if (attack > 50) {
            message = `El Pokémon tiene más de 50 de ataque. Ataque del Pokémon: ${attack}`;
            resolve();
          } else {
            message = `El Pokémon tiene menos de 50 de ataque. Ataque del Pokémon: ${attack}`;
            reject();
          }
        })
    })
      .then(() => {
        this.message = message;
      })
  }
  getPokemonData(url: string): Promise<any> {
    return this.http.get(url).toPromise()
      .then((pokemon: any) => {
        return pokemon;
      })
  }

}
