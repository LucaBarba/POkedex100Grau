import { useContext, useState, useEffect } from "react";

import Navbar from "../components/navbar";

import links from "../resources/links";

import UserContext from "../contexts/userContext";

import api from "../resources/api"

import {Card, CardList} from "../styles/cards"

function ListaDePokemons({array, user}){

  // console.log(array)

  return(
      
    <CardList>

      {array.map((pokemon)=> (
          
        <Card>

          <img src= {pokemon.image_url}/>
          <ul style = {{listStyleType: "none"}}>

            <li>Nome: {pokemon.name}</li>
            <li> Tipo(s): {pokemon.kind}</li>
            <li>Peso: {pokemon.weight}</li>
            <li>Id: {pokemon.id}</li>
              
        </ul>

        <button onClick={()=>{

          console.log(user)
          console.log(pokemon.name)
          console.log("\n")





        }}>

          Favoritar
        </button>

        </Card>
      
    ))}
      
    </CardList>
  )

}













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
