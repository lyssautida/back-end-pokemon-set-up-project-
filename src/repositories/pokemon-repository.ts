import pgp from 'pg-promise';
import { Pokemon } from '../entities/pokemon';

export class PokemonRepository {
  private pokemons: Pokemon[];
  private pgpClient

  constructor() {
    this.pokemons = [];
    this.pgpClient = pgp()(
      'postgres://porstgres:postgres@localhost5432/postgres',
    );
  }

  async insert(pokemon: Pokemon): Promise<void> {
  await this.pgpCliente.query(`insert into pokemon (id, name, level, type) values ($1, $2, $3, $4)`,
  [pokemon.id, pokemon.nome, pokemon.nivel, pokemon.tipo],
  );
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
