import { useContext } from "react";

import Navbar from "../components/navbar";
import Form from "../components/form";

import links from "../resources/links";
import api from "../resources/api";

import UserContext from "../contexts/userContext";

import User from "../models/user";
import { Redirect } from "react-router";

function Login() {
  const { user, setUser } = useContext(UserContext);

  function handleSubmit(e, formName, setFormText) {
    e.preventDefault();

    api
      .get(`/users/${formName}`)
      .then((res) => {
        const curUser = User(
          res.data.user.id,
          res.data.user.username,
          res.data.pokemons
        );

        setUser(curUser);
      })
      .catch((error) => {
        setFormText("");
      });
  }

  if (user != null) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Navbar links={[links.register, links.login]} />
      <Form title="Fazer login" buttonText="Entrar" submitHook={handleSubmit} />
    </>
  );
}

export default Login;
