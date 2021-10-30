import Navbar from "../components/navbar";

import links from "../resources/links";

import { useContext } from "react";

import PokemonList from "../components/pokemonList";

import UserContext from "../contexts/userContext";
import { Redirect } from "react-router";

function Profile() {
  const { user } = useContext(UserContext);

  if (user === null) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Navbar links={[links.profile, links.logout]} />
      <h1>Profile</h1>

      <PokemonList array={user.favorites} />
    </>
  );
}

export default Profile;
