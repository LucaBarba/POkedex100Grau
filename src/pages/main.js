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
    if (page <= pokemonArray.length / 25) {
      return;
    }

    api.get(`/pokemons?page=${page}`).then((res) => {
      console.log(res);

      setPokemonArray((p) => {
        console.log(p);
        const shallow = p.concat(res.data.data);
        console.log(shallow);
        return shallow;
      });
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
