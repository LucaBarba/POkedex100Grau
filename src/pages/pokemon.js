import { useContext } from "react";

import Navbar from "../components/navbar";

import links from "../resources/links";

import UserContext from "../contexts/userContext";

function Pokemon() {
  const { user } = useContext(UserContext);

  let navLinks = [links.register, links.login];

  if (user != null) {
    navLinks = [links.profile, links.logout];
  }
  return (
    <>
      <Navbar links={navLinks} />
      <h1>Pokemon</h1>
    </>
  );
}

export default Pokemon;
