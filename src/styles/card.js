import styled from "styled-components";

import star_off from "../assets/star_off.png";

export const Card = styled.div`
  flex-basis: 220px;
  flex-shrink: 1;

  margin: 2px;
  padding: 10px;

  display: flex;
  flex-direction: column;

  justify-content: center;

  background-color: #7eca35;
  border: 2px solid black;
  border-radius: 5px;
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
`;
