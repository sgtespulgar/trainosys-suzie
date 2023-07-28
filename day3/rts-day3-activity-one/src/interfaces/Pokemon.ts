export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number
    img: string;
    types: string[];
    color : string;
    description ?: string;
  }

export interface PokemonProps {
  pokemon : Pokemon
}
