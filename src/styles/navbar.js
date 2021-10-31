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
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const NavLinkStyled = styled(NavLink)`
  height: 100%;
  width: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  text-decoration: none;
  font-weight: bold;
  color: var(--white-text);

  background-color: #00000030;
`;
