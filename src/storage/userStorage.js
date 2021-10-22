import { useEffect, useState } from "react";

import api from "../resources/api";

import User from "../models/user";

const useUser = () => {
  const storedUser = JSON.parse(localStorage.getItem("user@pokedex"));

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (storedUser != null) {
      api.get(`/users/${storedUser.username}`).then((res) => {
        const curUser = User(
          res.data.user.id,
          res.data.user.username,
          res.data.pokemons
        );

        setUser(curUser);
      });
    }
  }, []);

  const storeAndSetUser = (u) => {
    try {
      localStorage.setItem("user@pokedex", JSON.stringify(u));
      setUser(u);
    } catch (error) {
      console.log("Can't set user in local storage");
      console.error(error);
    }
  };

  // TODO: always call the API for favorites.

  return [user, storeAndSetUser];
};

export default useUser;
