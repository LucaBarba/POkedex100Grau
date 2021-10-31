import api from "../resources/api";

import UserContext from "../contexts/userContext";
import { useContext } from "react";

import { capitalizeName } from "../utils";

import { Card, Name, FavButton } from "../styles/card";

function PokemonCard({ pokemon, setSelected }) {
  const { user, setUser } = useContext(UserContext);

  let cardClasses = "";

  if (!user) {
    cardClasses += "disabled hidden";
  } else if (favoritePosition(user, pokemon) !== -1) {
    cardClasses += " icon-favorited";
  }

  return (
    <Card
      onClick={() => setSelected(pokemon)}
      className={pokemon.kind.split(";")[0]}
    >
      <img src={pokemon.image_url} alt={pokemon.name + " image"} />
      <Name>{capitalizeName(pokemon.name)}</Name>

      <FavButton
        className={cardClasses}
        disabled={user === null}
        onClick={(event) => {
          handleFavoriteButton(event, user, setUser, pokemon);
        }}
      />
    </Card>
  );
}

function favoritePosition(user, pokemon) {
  if (user == null) {
    return -1;
  }

  let i = 0;

  if (user != null) {
    for (i = 0; i < user.favorites.length; i++) {
      if (user.favorites[i].name === pokemon.name) {
        return i;
      }
    }
  }

  return -1;
}

function handleFavoriteButton(event, user, setUser, pokemon) {
  event.preventDefault();
  event.stopPropagation();

  if (user === null) return;

  event.target.classList.add("disabled", "loading");

  const favPosition = favoritePosition(user, pokemon);

  if (favPosition !== -1) {
    api
      .delete(`/users/${user.username}/starred/${pokemon.name}`)
      .then((_res) =>
        setUser((oldUser) => {
          let newUser = { ...oldUser };

          newUser.favorites = oldUser.favorites.slice(0);
          newUser.favorites.splice(favoritePosition(oldUser, pokemon), 1);

          return newUser;
        })
      )
      .finally(() => {
        event.target.classList.remove("disabled", "loading");
      });
  } else {
    api
      .post(`/users/${user.username}/starred/${pokemon.name}`)
      .then((_res) =>
        setUser((oldUser) => {
          let newUser = { ...oldUser };

          newUser.favorites = oldUser.favorites.slice(0);
          newUser.favorites.push(pokemon);

          return newUser;
        })
      )
      .finally(() => {
        event.target.classList.remove("disabled", "loading");
      });
  }
}

export default PokemonCard;
