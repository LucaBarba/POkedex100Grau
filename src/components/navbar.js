import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  height: 4rem;
  display: flex;
  justify-content: space-between;
`;

function Navbar() {
  let rightButton = <Link to="/login">Login</Link>;

  return (
    <Nav>
      <h1>Slá</h1>
      <Link to="/login">Login</Link>
    </Nav>
  );
}

export default Navbar;
