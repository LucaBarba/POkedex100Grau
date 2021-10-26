import { useContext, useState, useEffect } from "react";

import Navbar from "../components/navbar";

import links from "../resources/links";

import UserContext from "../contexts/userContext";

import api from "../resources/api"

import ListaDePokemons from "../components/ListaDePokemons";













function Main() {

  const { user } = useContext(UserContext);
  let teste = user.username

  // console.log(teste)

  let navLinks = [links.register, links.login];

  if (user != null) {
    navLinks = [links.profile, links.logout];
  }
  
  const [pokemonArray, setPokemonArray] = useState([])
  useEffect(()=>{
    api
      .get("/pokemons")
      .then((response)=>{
      
        setPokemonArray(response.data.data)
        
      })
  },[]) 
  // console.log(pokemonArray)
  
  return (
    <>
      <Navbar links={navLinks} />
      <h2>Main{user ? " logado" : ""}</h2>

      <ListaDePokemons array = {pokemonArray} user = {teste}/>


    </>
  );
}

export default Main;
