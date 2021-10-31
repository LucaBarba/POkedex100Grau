import { useEffect, useState } from "react";

import api from "../resources/api";

import User from "../models/user";
import links from "../resources/links";

const setProfileText = (user) => (links.profile.name = user?.username);

const parseFromStorage = () => {
  try {
    return JSON.parse(localStorage.getItem("user@pokedex"));
  } catch (e) {
    return null;
  }
};

const useUser = () => {
  const storedUser = parseFromStorage();

  const [user, setUser] = useState(storedUser);

  useEffect(() => {
    const storedUser = parseFromStorage();

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

  useEffect(() => {
    try {
      localStorage.setItem("user@pokedex", JSON.stringify(user));

      // Quando usuário é atualizado, atualiza o link para o perfil
      setProfileText(user);
    } catch (error) {}
  }, [user]);

  // Muda link do perfil para refletir o usuário salvo no localStorage
  setProfileText(user);

  // Permite que o link de logout limpe o estado e localStorage
  links.logout.onClick = (e) => {
    e.preventDefault();

    setUser(null);
  };

  return [user, setUser];
};

export default useUser;
