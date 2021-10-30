import { CardList } from "../styles/cards";
import PokemonCard from "./pokemonCard";

function PokemonList({ array }) {
  return (
    <CardList>
      {array.map((pokemon, index) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </CardList>
  );
}

export default PokemonList;
