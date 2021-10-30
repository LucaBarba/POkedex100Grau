import styled from "styled-components";

export const PokemonListDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 91vh;
`;

export const CardList = styled.div`
  flex-basis: 100%;
  flex-grow: 1;

  margin: 0;

  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-around;
`;

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
  float: right;
  width: fit-content;
`;

export const Button = styled.button`
  padding: 0rem 0.6rem;

  font-size: 1.5rem;
  text-align: center;

  cursor: pointer;

  border: none;

  background-color: #408040;
`;
