import { useContext, useState, useEffect } from "react";

import Navbar from "../components/navbar";

import links from "../resources/links";

import UserContext from "../contexts/userContext";

import api from "../resources/api";

import PokemonList from "../components/pokemonList";

function Main() {
  const { user } = useContext(UserContext);
  const [pokemonArray, setPokemonArray] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPokemonArray((pokemonArray) => {
      if (page <= pokemonArray.length / 25) {
        return pokemonArray;
      }

      api.get(`/pokemons?page=${page}`).then((res) => {
        const pokemonCopy = pokemonArray.concat(res.data.data);

        setPokemonArray(pokemonCopy);
      });

      return pokemonArray;
    });
  }, [page]);

  let navLinks = [links.register, links.login];
  if (user != null) {
    navLinks = [links.profile, links.logout];
  }

  return (
    <>
      <Navbar links={navLinks} />

      <PokemonList array={pokemonArray} page={page} setPage={setPage} />
    </>
  );
}

export default Main;
