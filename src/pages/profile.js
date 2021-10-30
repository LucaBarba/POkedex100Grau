import Navbar from "../components/navbar";

import links from "../resources/links";

import { useContext } from "react";

import ListaDePokemons from "../components/ListaDePokemons";

import UserContext from "../contexts/userContext";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Navbar links={[links.profile, links.logout]} />
      <h1>Profile</h1>

      <ListaDePokemons array={user.favorites} />
    </>
  );
}

export default Profile;
