let nextKey = -1;

function genLink(name, path, pathWithParams) {
  nextKey += 1;
  const link = {
    name: name,
    path: path,
    pathWithParams: pathWithParams,
    onClick: null,
    key: nextKey,
  };

  return link;
}

const links = {
  login: genLink("Entrar", "/login"),
  register: genLink("Cadastrar", "/register"),
  profile: genLink("Perfil", "/profile"),
  main: genLink("Página inicial", "/"),
  logout: genLink("Sair", "/"),
  pokemon: genLink("", "/pokemon", "/pokemon/:pokemon_name"),
};

export default links;
