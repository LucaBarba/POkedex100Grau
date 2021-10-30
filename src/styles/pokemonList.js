import styled from "styled-components";

export const Card = styled.div`
  width: 200px;
  margin: 2px;
  padding: 10px;
  flex-grow: 1;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #7eca35;
  border: 3px solid black;
  border-radius: 5px;
`;

export const CardList = styled.div`
  display: flex;
  margin: 0;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  padding: 0rem 0.5rem;
  height: 90vh;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
`;

export const PokemonListDiv = styled.div`
  display: flex;
  flex: row;
`;
