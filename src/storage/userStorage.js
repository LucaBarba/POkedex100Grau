import { useEffect, useState } from "react";

import api from "../resources/api";

import User from "../models/user";
import links from "../resources/links";

const setProfileText = (user) => (links.profile.name = user?.username);

const useUser = () => {
  const storedUser = JSON.parse(localStorage.getItem("user@pokedex"));

  const [user, setUser] = useState(storedUser);

  // atualiza usuário no localStorage e no react
  const storeAndSetUser = (u) => {
    try {
      localStorage.setItem("user@pokedex", JSON.stringify(u));

      setUser(u);

      // Quando usuário é atualizado, atualiza o link para o perfil
      setProfileText(u);
    } catch (error) {
      console.log("Can't save user in local storage");
      console.error(error);
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user@pokedex"));

    if (storedUser != null) {
      api.get(`/users/${storedUser.username}`).then((res) => {
        const curUser = User(
          res.data.user.id,
          res.data.user.username,
          res.data.pokemons
        );

        storeAndSetUser(curUser);
      });
    }
  }, []);

  // Muda link do perfil para refletir o usuário salvo no localStorage
  setProfileText(user);

  // Permite que o link de logout limpe o estado e localStorage
  links.logout.onClick = (e) => {
    e.preventDefault();

    storeAndSetUser(null);
  };

  return [user, storeAndSetUser];
};

export default useUser;
