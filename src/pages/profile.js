import Navbar from "../components/navbar";

import links from "../resources/links";

import { useContext, useState, useEffect } from "react";

import api from "../resources/api";

import ListaDePokemons from "../components/ListaDePokemons";

import UserContext from "../contexts/userContext";

function Profile() {
  const { user } = useContext(UserContext);

  let usuario = user.username;

  // const [favoritesArray, setFavoritesArray] = useState([]);
  // useEffect(() => {
  //   api
  //     // alterar o get abaixo
  //     .get("/pokemons")
  //     .then((response) => {
  //       setFavoritesArray(response.data.data);
  //     });
  // }, []);

  return (
    <>
      <Navbar links={[links.logout]} />
      <h1>Profile</h1>

      <ListaDePokemons array={user.favorites} />
    </>
  );
}

export default Profile;
