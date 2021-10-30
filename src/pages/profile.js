import { useContext } from "react";
import { Redirect } from "react-router";

import Navbar from "../components/navbar";
import PokemonList from "../components/pokemonList";

import links from "../resources/links";

import UserContext from "../contexts/userContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (user === null) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Navbar links={[links.profile, links.logout]} />

      <PokemonList array={user.favorites} />
    </>
  );
}

export default Profile;
