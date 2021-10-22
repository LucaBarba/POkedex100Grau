let nextKey = -1;

function genLink(name, path, onClickFunction) {
  nextKey += 1;
  return { name: name, path: path, onClick: onClickFunction, key: nextKey };
}

const links = {
  login: genLink("Entrar", "/login"),
  register: genLink("Cadastrar", "/register"),
  profile: genLink("Perfil", "/profile"),
  main: genLink("Página inicial", "/"),
  logout: genLink("Sair", "/"),
};

export default links;
