import { useContext } from "react";

import Navbar from "../components/navbar";

import links from "../resources/links";

import UserContext from "../contexts/userContext";

function Main() {
  const { user, setUser } = useContext(UserContext);

  let navLinks = [links.register, links.login];

  if (user != null) {
    const linkLogout = links.logout;
    linkLogout.onClick = (e) => {
      e.preventDefault();
      setUser(null);
    };

    navLinks = [links.profile, linkLogout];
  }

  return (
    <>
      <Navbar links={navLinks} />
      <h2>Main{user ? " logado" : ""}</h2>
    </>
  );
}

export default Main;
