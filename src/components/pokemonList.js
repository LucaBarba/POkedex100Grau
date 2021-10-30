import { PokemonListDiv, Button, CardList } from "../styles/pokemonList";

import PokemonCard from "./pokemonCard";

import config from "../config";

function PokemonList({ array, show, pageLimits, page, setPage }) {
  const { start, amount } = show || { start: 0, amount: config.amountPerPage };

  function buttonHandler(delta) {
    let nextPage = page + delta;

    if (nextPage < pageLimits.lower) {
      nextPage = pageLimits.lower;
    } else if (nextPage > pageLimits.upper) {
      nextPage = pageLimits.upper;
    }

    setPage(nextPage);
  }

  return (
    <PokemonListDiv>
      <Button
        disabled={page <= pageLimits.lower}
        onClick={() => buttonHandler(-1)}
      >
        {"<"}
      </Button>
      <CardList>
        {array.slice(start, start + amount).map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </CardList>
      <Button
        disabled={page >= pageLimits.upper}
        onClick={() => buttonHandler(+1)}
      >
        {">"}
      </Button>
    </PokemonListDiv>
  );
}

export default PokemonList;
