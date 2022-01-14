import { Request, Response } from 'express';
import { Pokemon } from '../entities/pokemon';
import { PokemonRepository } from '../repositories/pokemon-repository';

export class PokemonController {
  private pokemonRepository: PokemonRepository;

  constructor() {
    this.pokemonRepository = new PokemonRepository();
  }

  createPokemon(req: Request, res: Response) {
    // desestruturar e passar as info de req para o pokemon criado
    const { nome, nivel, tipo } = req.body;
    // cria pokemon com as info da req
    const pokemon = new Pokemon(nome, nivel, tipo);
    // inserir no repositorio insert
    this.pokemonRepository.insert(pokemon);
    res.status(201).json({
      id: pokemon.id,
      nome: pokemon.nome,
      nivel: pokemon.nivel,
      tipo: pokemon.tipo,
    });
  }

  getPokemonByName(req: Request, res: Response) {
    const { nome } = req.params;
    const { pokemon } = this.pokemonRepository.findByName(nome);
    if (!pokemon) {
      return res.status(404).json({
        mensagem: 'Pokemon não encontrado',
      });
    }

    return res.status(200).json({
      id: pokemon.id,
      nome: pokemon.nome,
      nivel: pokemon.nivel,
      tipo: pokemon.tipo,
    });
  }

  updatePokemon(res: Requestres: Response) {
    const { nome } = req.params;)

}

// passar informação
// POST http://localhost:3000/pokemon
// body { name: 'Pikachu, type: electric }
