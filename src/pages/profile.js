import { useContext, useState } from "react";
import { Redirect } from "react-router";

import Navbar from "../components/navbar";
import PokemonList from "../components/pokemonList";

import links from "../resources/links";

import UserContext from "../contexts/userContext";

import config from "../config";

function Profile() {
  const { user } = useContext(UserContext);
  const [page, setPage] = useState(0);

  if (user === null) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Navbar links={[links.profile, links.logout]} />

      <PokemonList
        array={user.favorites}
        show={{
          start: page * config.amountPerPage,
          amount: config.amountPerPage,
        }}
        pageLimits={{ lower: 0, upper: ((user.favorites.length - 1) / 25) | 0 }}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

export default Profile;
