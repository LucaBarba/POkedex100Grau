import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";

import Navbar from "../components/navbar";
import PokemonList from "../components/pokemonList";

import links from "../resources/links";

import UserContext from "../contexts/userContext";

import config from "../config";

function Profile() {
  const { user } = useContext(UserContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage((p) => {
      const maxPage = Math.ceil(user.favorites.length / config.amountPerPage);

      if (p > maxPage) {
        // If favorite has been removed and the page is now off limits, go back
        return p - 1;
      }

      return p;
    });
  }, [user]);

  if (user === null) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <Navbar links={[links.profile, links.logout]} />

      <PokemonList
        array={user.favorites}
        pageLimits={{
          lower: 1,
          upper: Math.ceil(user.favorites.length / config.amountPerPage),
        }}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

export default Profile;
