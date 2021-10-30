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
    api.get(`/pokemons?page=${page}`).then((response) => {
      setPokemonArray(response.data.data);
    });
  }, [page]);

  let navLinks = [links.register, links.login];
  if (user != null) {
    navLinks = [links.profile, links.logout];
  }

  return (
    <>
      <Navbar links={navLinks} />

      <PokemonList
        array={pokemonArray}
        pageLimits={{ lower: 1, upper: 33 }}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

export default Main;
