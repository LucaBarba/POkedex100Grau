import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const Nav = styled.nav`
  height: 9vh;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(180deg, #fff, #cecece 20%, #aeaeae 80%, #cecece);
`;

export const Img = styled.img`
  height: 4rem;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const NavLinksDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LinkDiv = styled.div`
  height: auto;
  width: 5rem;
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  height: 100%;
  width: 5rem;
  text-align: center;
  vertical-align: baseline;
  text-decoration: none;
  font-weight: bold;
  color: black;
`;
