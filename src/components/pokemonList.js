import { useState } from "react";

import { PokemonListDiv, Button, CardList } from "../styles/list";

import PokemonCard from "./pokemonCard";
import PokemonDetails from "./pokemonDetails";

import config from "../config";

function PokemonList({ array, pageLimits, page, setPage }) {
  const [selected, setSelected] = useState(null);

  const curPageLimits = pageLimits || config.defaultPageLimits;
  const start = (page - 1) * config.amountPerPage;
  const amount = config.amountPerPage;
  const leftDisabled = page <= curPageLimits.lower;
  const rightDisable = page >= curPageLimits.upper;

  function buttonHandler(delta) {
    let nextPage = page + delta;

    if (nextPage < curPageLimits.lower) {
      nextPage = curPageLimits.lower;
    } else if (nextPage > curPageLimits.upper) {
      nextPage = curPageLimits.upper;
    }

    setPage(nextPage);
  }

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
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            setSelected={setSelected}
          />
        ))}
      </CardList>
      <Button
        className={rightDisable ? "disabled page-grey" : ""}
        disabled={rightDisable}
        onClick={() => buttonHandler(+1)}
      >
        {">"}
      </Button>
      <PokemonDetails selected={selected} setSelected={setSelected} />
    </PokemonListDiv>
  );
}

export default PokemonList;
