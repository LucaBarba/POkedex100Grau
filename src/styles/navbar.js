import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const Nav = styled.nav`
  height: 9vh;

  display: flex;

  justify-content: space-between;
  align-items: center;

  background: linear-gradient(180deg, #777, var(--bg));
`;

export const Img = styled.img`
  height: 3.5rem;
  margin-left: 1.3rem;
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
  color: var(--white-text);
`;
