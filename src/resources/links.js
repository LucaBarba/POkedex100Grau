function genLink(name, path) {
  return { name: name, path: path };
}

const links = {
  login: genLink("Entrar", "/login"),
  register: genLink("Cadastrar", "/register"),
  profile: genLink("Perfil", "/profile"),
  main: genLink("Página inicial", "/"),
};

export default links;
