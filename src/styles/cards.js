import styled from "styled-components";

export const Card = styled.div`
  border-width: 3px;
  border-color: black;
  border-style: solid;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3px;
  background-color: #7eca35;
  width: 160px;
  padding: 10px;
`;

export const CardList = styled.div`
  flex-wrap: wrap;
  margin: 0;
  display: flex;
`;
