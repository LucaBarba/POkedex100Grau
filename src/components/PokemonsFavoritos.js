// import { Card, CardList } from "../styles/cards";
// import DesfavoritaPokemons from "./DesfavoritaPokemons";

// function ListaDeFavoritos({ array, user }) {
//   // console.log(array)

//   return (
//     <CardList>
//       {array.map((pokemon) => (
//         <Card>
//           <img src={pokemon.image_url} />
//           <ul style={{ listStyleType: "none" }}>
//             <li>Nome: {pokemon.name}</li>
//             <li> Tipo(s): {pokemon.kind}</li>
//             <li>Peso: {pokemon.weight}</li>
//             <li>Id: {pokemon.id}</li>
//           </ul>

//           <button
//             onClick={() => {
//               DesfavoritaPokemons(array, pokemon.name, user);

//               // console.log(user)
//               // console.log(pokemon.name)
//               // console.log("\n")
//             }}
//           >
//             Favoritar
//           </button>
//         </Card>
//       ))}
//     </CardList>
//   );
// }

// export default ListaDeFavoritos;
