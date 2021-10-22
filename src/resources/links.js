function genLink(name, path, onClickFunction) {
  return { name: name, path: path, onClick: onClickFunction };
}

const links = {
  login: genLink("Entrar", "/login"),
  register: genLink("Cadastrar", "/register"),
  profile: genLink("Perfil", "/profile"),
  main: genLink("Página inicial", "/"),
  logout: genLink("Sair", "/"),
};

export default links;
