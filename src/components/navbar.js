import styled from "styled-components";
import { Link } from "react-router-dom";

import links from "../resources/links";

const Nav = styled.nav`
  height: 4rem;
  display: flex;
  justify-content: space-between;
`;

function Navbar(props) {
  const mainLink = props.mainLink || links.main;

  return (
    <Nav>
      <Link to={mainLink.path}>
        <h1>Slá</h1>
      </Link>
      {props.links?.map((el) => (
        <Link to={el.path}>{el.name}</Link>
      ))}
    </Nav>
  );
}

export default Navbar;
