import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import links from "../resources/links";

const Nav = styled.nav`
  height: auto;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(180deg, #fff, #cecece 20%, #aeaeae 80%, #cecece);
`;

const Img = styled.img`
  height: 4rem;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const NavLinksDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LinkDiv = styled.div`
  height: auto;
  width: 5rem;
  display: flex;
  align-items: center;
`;

const NavLinkStyled = styled(NavLink)`
  height: 100%;
  width: 5rem;
  text-align: center;
  vertical-align: baseline;
  text-decoration: none;
  font-weight: bold;
  color: black;
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
            <NavLinkStyled
              activeClassName={el.path == links.logout.path ? "" : "disabled"}
              to={el.path}
            >
              {el.name}
            </NavLinkStyled>
          </LinkDiv>
        ))}
      </NavLinksDiv>
    </Nav>
  );
}

export default Navbar;
