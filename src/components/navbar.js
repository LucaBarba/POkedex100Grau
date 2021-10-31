import { Link } from "react-router-dom";

import links from "../resources/links";

import { Nav, Img, NavLinksDiv, NavLinkStyled } from "../styles/navbar";

function Navbar(props) {
  const mainLink = props.mainLink || links.main;

  return (
    <Nav>
      <Link to={mainLink.path}>
        <Img src="/pokedex_logo.png"></Img>
      </Link>
      <NavLinksDiv>
        {props.links?.map((el) => (
          <NavLinkStyled
            key={el.key}
            onClick={el?.onClick}
            activeClassName={
              el.path === links.logout.path ? "" : "disabled nav-grey"
            }
            to={el.path}
          >
            {el.name}
          </NavLinkStyled>
        ))}
      </NavLinksDiv>
    </Nav>
  );
}

export default Navbar;
