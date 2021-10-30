import { Card, CardList } from "../styles/cards";
import UserContext from "../contexts/userContext";
import { useContext } from "react";
import api from "../resources/api";

function PokemonList({ array }) {
  const { user, setUser } = useContext(UserContext);

  const isUserNull = user == null;

  return (
    <CardList>
      {array.map((pokemon, index) => (
        <Card key={index}>
          <img src={pokemon.image_url} alt={pokemon.name + " image"} />
          <div style={{ listStyleType: "none" }}>
            <div>Nome: {pokemon.name}</div>
            <div> Tipo(s): {pokemon.kind}</div>
            <div>Peso: {pokemon.weight}</div>
            <div>Id: {pokemon.id}</div>
          </div>

          <button
            disabled={isUserNull}
            onClick={() => {
              handleFavoriteButton(user, setUser, pokemon);
            }}
          >
            {verifyFavorite(user, pokemon) ? "Desfavoritar" : "Favoritar"}
          </button>
        </Card>
      ))}
    </CardList>
  );
}
function verifyFavorite(user, pokemon) {
  if (user == null) {
    return false;
  }

  let i = 0;

  if (user != null) {
    for (i = 0; i < user.favorites.length; i++) {
      if (user.favorites[i].name === pokemon.name) {
        return true;
      }
    }
  }

  return false;
}

function handleFavoriteButton(user, setUser, pokemon) {
  if (user === null) return;

  let isFavorite = false;

  let indexFavorites = 0;
  for (
    indexFavorites = 0;
    indexFavorites < user.favorites.length;
    indexFavorites++
  ) {
    if (user.favorites[indexFavorites].name === pokemon.name) {
      isFavorite = true;
      break;
    }
  }

  if (!isFavorite) {
    api.post(`/users/${user.username}/starred/${pokemon.name}`).then((_res) => {
      let newUser = { ...user };

      newUser.favorites = user.favorites.slice(0);
      newUser.favorites.push(pokemon);

      setUser(newUser);
    });
  } else {
    api
      .delete(`/users/${user.username}/starred/${pokemon.name}`)
      .then((_res) => {
        let newUser = { ...user };

        newUser.favorites = user.favorites.slice(0);
        newUser.favorites.splice(indexFavorites, 1);

        setUser(newUser);
      });
  }
}

export default PokemonList;
