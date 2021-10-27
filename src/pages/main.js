import { useContext, useState, useEffect } from "react";

import Navbar from "../components/navbar";

import links from "../resources/links";

import UserContext from "../contexts/userContext";

import api from "../resources/api";

// import {Card, CardList} from "../styles/cards"

import ListaDePokemons from "../components/ListaDePokemons";

function Main() {
  const { user } = useContext(UserContext);
  // let logged = true

  let logged = false;
  let usuario = "inicializa";
  if (user === null) {
    console.log("nulo!");
    usuario = "No Login";
  } else {
    logged = true;
    usuario = user;
  }

  // console.log(user)

  let navLinks = [links.register, links.login];

  if (user != null) {
    navLinks = [links.profile, links.logout];
  }

  const [pokemonArray, setPokemonArray] = useState([]);
  useEffect(() => {
    api.get("/pokemons").then((response) => {
      setPokemonArray(response.data.data);
    });
  }, []);
  // console.log(pokemonArray)

  return (
    <>
      <Navbar links={navLinks} />
      <h2>Main{user ? " logado" : ""}</h2>

      <ListaDePokemons array={pokemonArray} user={usuario} logged={logged} />
    </>
  );
}

export default Main;
