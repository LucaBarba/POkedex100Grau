import styled from "styled-components";

export const DetailsPage = styled.div`
  min-height: 120vh;
  position: fixed;
  inset: 0 0 0 0;

  margin: auto;

  cursor: pointer;

  background-color: #00000070;
`;

export const DetailsSection = styled.div`
  width: fit-content;
  height: fit-content;

  position: absolute;
  inset: 0 0 0 0;

  margin: auto;

  display: flex;
  flex-flow: row wrap;
  gap: 10px;

  cursor: auto;

  border-radius: 20px;
`;

export const Img = styled.img`
  width: 12rem;
`;

export const DetailsListStyle = styled.ul`
  width: 12rem;

  display: flex;

  flex-direction: row;
  align-items: stretch;
  gap: 10px;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const HeaderStyle = styled.li`
  list-style-type: none;
`;

export const ValueStyle = styled.li`
  list-style-type: none;
  font-weight: bolder;
`;
