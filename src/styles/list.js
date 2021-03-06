import styled from "styled-components";

export const PokemonListDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 91vh;

  background-color: var(--bg);
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

export const Button = styled.button`
  padding: 0rem 0.6rem;

  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  color: white;

  cursor: pointer;

  border: none;

  background: linear-gradient(
    180deg,
    var(--bg),
    #444 30%,
    #666 50%,
    #444 70%,
    var(--bg)
  );
`;

/*background: linear-gradient(
    180deg,
    #cecece,
    #60c060 15%,
    #408040 50%,
    #60c060 85%,
    #cecece
  );*/
