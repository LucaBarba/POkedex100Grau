import { useContext } from "react";
import { Redirect } from "react-router";

import Navbar from "../components/navbar";
import Form from "../components/form";

import links from "../resources/links";
import api from "../resources/api";

import UserContext from "../contexts/userContext";

import User from "../models/user";

function Register() {
  const { user, setUser } = useContext(UserContext);

  function handleSubmit(e, name, setName) {
    e.preventDefault();
    api
      .post("/users", { username: name })
      .then((res) => {
        const newUser = User(res.data.id, res.data.username, []);

        setUser(newUser);
      })
      .catch((error) => {
        setName("");
        console.error("Failed to register");
      });
  }

  if (user != null) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Navbar links={[links.register, links.login]} />
      <Form title="Criar conta" buttonText="Criar" submitHook={handleSubmit} />
    </>
  );
}

export default Register;
