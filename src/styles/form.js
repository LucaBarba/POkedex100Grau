import styled from "styled-components";

export const FormDiv = styled.div`
  height: 91vh;
  flex-grow: 1;
  display: flex;
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
  font-size: 3rem;
  font-weight: bold;
  padding-bottom: 15px;
  text-align: center;
  width: 100%;
  color: var(--white-text);
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
`;

export const TextInput = styled.input`
  padding: 0.1rem;
  font-size: 1.5rem;
  text-align: center;
  border: solid;
  border-width: 2px;
  border-radius: 20px;
  border-color: #5e5e5e;
`;

export const Label = styled.label`
  padding-left: auto;
  padding-right: auto;
  text-align: center;
  color: var(--white-text);
`;

export const ButtonInput = styled.input`
  margin: 20px 0px;
  height: 2rem;
  width: 30%;
  border: none;
  border-radius: 20px;
  background-color: var(--white-text);
  color: var(--bg);
  box-shadow: 3px 3px 3px #666;
  cursor: pointer;
`;
