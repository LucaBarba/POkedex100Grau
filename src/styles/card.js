import styled from "styled-components";

import star_off from "../assets/star_off.png";

export const Card = styled.div`
  flex-basis: 180px;
  flex-shrink: 1;

  margin: 22px;
  padding: 10px;

  display: flex;
  flex-direction: column;

  justify-content: center;

  border-radius: 5px;

  box-shadow: 3px 3px black;
`;

export const Name = styled.div`
  text-align: center;
`;

export const FavButton = styled.button`
  width: 25px;
  height: 25px;

  float: right;

  border: none;

  cursor: pointer;

  background: no-repeat center/100% url(${star_off});
  filter: invert(18.75%);
`;
