import { PokemonListDiv, Button, CardList } from "../styles/list";

import PokemonCard from "./pokemonCard";

import config from "../config";

function PokemonList({ array, pageLimits, page, setPage }) {
  const start = (page - 1) * config.amountPerPage;
  const amount = config.amountPerPage;
  const curPageLimits = pageLimits || config.defaultPageLimits;

  function buttonHandler(delta) {
    let nextPage = page + delta;

    if (nextPage < curPageLimits.lower) {
      nextPage = curPageLimits.lower;
    } else if (nextPage > curPageLimits.upper) {
      nextPage = curPageLimits.upper;
    }

    setPage(nextPage);
  }

  const leftDisabled = page <= curPageLimits.lower;
  const rightDisable = page >= curPageLimits.upper;

  return (
    <PokemonListDiv>
      <Button
        className={leftDisabled ? "disabled page-grey" : ""}
        disabled={leftDisabled}
        onClick={() => buttonHandler(-1)}
      >
        {"<"}
      </Button>
      <CardList>
        {array.slice(start, start + amount).map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </CardList>
      <Button
        className={rightDisable ? "disabled page-grey" : ""}
        disabled={rightDisable}
        onClick={() => buttonHandler(+1)}
      >
        {">"}
      </Button>
    </PokemonListDiv>
  );
}

export default PokemonList;
