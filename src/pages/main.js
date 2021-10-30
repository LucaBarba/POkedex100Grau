import { useContext, useState, useEffect } from "react";

import Navbar from "../components/navbar";

import links from "../resources/links";

import UserContext from "../contexts/userContext";

import api from "../resources/api";

// import {Card, CardList} from "../styles/cards"

import ListaDePokemons from "../components/ListaDePokemons";

import { Buttons } from "../styles/button";

const MIN_PAGE = 1;
const MAX_PAGE = 33;

function Main() {
  const { user } = useContext(UserContext);
  const [pokemonArray, setPokemonArray] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(page);
    api.get(`/pokemons?page=${page}`).then((response) => {
      setPokemonArray(response.data.data);
    });
  }, [page]);

  function buttonHandler(delta) {
    let nextPage = page + delta;

    if (nextPage < MIN_PAGE) {
      nextPage = MIN_PAGE;
    } else if (nextPage > MAX_PAGE) {
      nextPage = MAX_PAGE;
    }

    setPage(nextPage);
  }

  let navLinks = [links.register, links.login];
  if (user != null) {
    navLinks = [links.profile, links.logout];
  }

  return (
    <>
      <Navbar links={navLinks} />
      <h2>Main{user ? " logado" : ""}</h2>

      <ListaDePokemons array={pokemonArray} />
      <Buttons>
        <button
          style={{ width: "50%", height: "50px" }}
          disabled={page === MIN_PAGE}
          onClick={() => buttonHandler(-1)}
        >
          Prev
        </button>
        <button
          style={{ width: "50%", height: "50px" }}
          disabled={page === MAX_PAGE}
          onClick={() => buttonHandler(+1)}
        >
          Next
        </button>
      </Buttons>
    </>
  );
}

export default Main;
