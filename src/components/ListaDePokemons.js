import { Card, CardList } from "../styles/cards";
import UserContext from "../contexts/userContext";
import { useContext } from "react";
import api from "../resources/api";

function ListaDePokemons({ array }) {
  const { user, setUser } = useContext(UserContext);

  function FavoritaPokemons(pokemon) {
    if (user === null) return;

    let isFavorite = false;

    // console.log(user);

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
      api
        .post(`/users/${user.username}/starred/${pokemon.name}`)
        .then((res) => {
          // console.log(res)
          // user.favorites.push(pokemon.name)

          let newUser = { ...user };
          console.log(newUser);

          newUser.favorites = user.favorites.slice(0);
          newUser.favorites.push(pokemon);

          console.log("adicionando:");
          console.log(newUser);

          setUser(newUser);
        });
    } else {
      api.delete(`/users/${user.username}/starred/${pokemon.name}`).then(() => {
        let newUser = { ...user };
        console.log(newUser);

        newUser.favorites = user.favorites.slice(0);
        newUser.favorites.splice(indexFavorites, 1);

        console.log("deletando:");
        console.log(newUser);

        setUser(newUser);
      });
    }

    // console.log(user)
    // console.log(pokemon)
  }

  return (
    <CardList>
      {array.map((pokemon) => (
        <Card>
          <img src={pokemon.image_url} />
          <ul style={{ listStyleType: "none" }}>
            <li>Nome: {pokemon.name}</li>
            <li> Tipo(s): {pokemon.kind}</li>
            <li>Peso: {pokemon.weight}</li>
            <li>Id: {pokemon.id}</li>
          </ul>

          <button
            onClick={() => {
              FavoritaPokemons(pokemon);

              // console.log(user)
              // console.log(pokemon.name)
              // console.log("\n")
            }}
          >
            Favoritar
          </button>
        </Card>
      ))}
    </CardList>
  );
}

export default ListaDePokemons;
