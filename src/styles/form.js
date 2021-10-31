import styled from "styled-components";

export const FormDiv = styled.div`
  height: 91vh;

  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: center;

  background-color: var(--bg);
`;

export const FormStyled = styled.form`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  width: 100%;

  padding-bottom: 15px;

  font-size: 3rem;
  font-weight: bold;
  text-align: center;

  color: var(--white-text);
`;

export const InputDiv = styled.div`
  max-width: 20rem;

  display: flex;
  flex-direction: column;
`;

export const TextInput = styled.input`
  padding: 0.1rem;
  font-size: 1.5rem;
  text-align: center;

  border: 2px solid #5e5e5e;
  border-radius: 20px;
`;

export const Label = styled.label`
  padding-left: auto;
  padding-right: auto;

  text-align: center;

  color: var(--white-text);
`;

export const ErrorMessage = styled.div`
  visibility: hidden;

  font-weight: bold;

  color: #ff7070;
`;

export const ButtonInput = styled.input`
  height: 2rem;
  width: 30%;

  margin: 1.7rem 0px;

  color: var(--bg);

  border: none;
  border-radius: 20px;

  background-color: var(--white-text);
  box-shadow: 2px 3px 3px #666;

  cursor: pointer;
`;
