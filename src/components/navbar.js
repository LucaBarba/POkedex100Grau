import { Link } from "react-router-dom";

import links from "../resources/links";

import {
  Nav,
  Img,
  NavLinksDiv,
  LinkDiv,
  NavLinkStyled,
} from "../styles/navbar";

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
              activeClassName={
                el.path === links.logout.path ? "" : "disabled grey"
              }
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
