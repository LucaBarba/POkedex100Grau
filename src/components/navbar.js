import styled from "styled-components";
import { Link } from "react-router-dom";

import links from "../resources/links";

const Nav = styled.nav`
  height: 4rem;
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img`
  height: 100%;
  margin-left: 5px;
  margin-top: 5px;
`;

const NavLinksDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LinkDiv = styled.div`
  height: 100%;
  width: 5rem;
  display: flex;
  align-items: center;
`;

const LinkStyled = styled(Link)`
  height: 100%;
  width: 5rem;
  text-decorations: none;
  text-align: center;
`;

function Navbar(props) {
  const mainLink = props.mainLink || links.main;

  return (
    <Nav>
      <Link to={mainLink.path}>
        <Img src="/pokedex_logo.png"></Img>
      </Link>
      <NavLinksDiv>
        {props.links?.map((el) => (
          <LinkDiv key={el.key} onClick={el?.onClick}>
            <LinkStyled to={el.path}>{el.name}</LinkStyled>
          </LinkDiv>
        ))}
      </NavLinksDiv>
    </Nav>
  );
}

export default Navbar;
