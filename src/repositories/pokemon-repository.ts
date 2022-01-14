import { Pokemon } from '../entities/pokemon';

export class PokemonRepository {
  private pokemons: Pokemon[];

  constructor() {
    this.pokemons = [];
  }

  insert(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
  }

  findByName(name: string): Pokemon | undefined {
    return const pokemon = this.pokemons.find((p) => p.nome === name);
  }

  updateLevel(name: string, level: number) {
    const pokemon = this.pokemons.filter(p =: this.pokemons.nome =/= name)
  const pokemon = this.findByName(name) as Pokemon;
  }
}
