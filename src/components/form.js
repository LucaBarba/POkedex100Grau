import styled from "styled-components";

import { useState } from "react";

const FormDiv = styled.div`
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FormStyled = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  padding-bottom: 15px;
  text-align: center;
  width: 100%;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
`;

const TextInput = styled.input`
  padding: 0.1rem;
  font-size: 1.5rem;
  text-align: center;
  border: solid;
  border-width: 2px;
  border-radius: 20px;
  border-color: #5e5e5e;
`;

const Label = styled.label`
  padding-left: auto;
  padding-right: auto;
  text-align: center;
`;

const ButtonInput = styled.input`
  margin: 20px 0px;
  height: 2rem;
  width: 30%;
  border: none;
  border-radius: 20px;
  background-color: #5e5e5e;
  color: #dedede;
  box-shadow: 2px 2px 5px #555;
  cursor: pointer;
`;

function Form(props) {
  const { title, buttonText, submitHook } = props;

  const [text, setText] = useState("");

  return (
    <FormDiv>
      <FormStyled>
        <Title>{title}</Title>
        <InputDiv>
          <Label htmlFor="inputName">Nome do usuário</Label>
          <TextInput
            type="text"
            name="inputName"
            id="inputName"
            value={text}
            autoFocus
            onChange={(e) => setText(e.target.value)}
          ></TextInput>
        </InputDiv>
        <ButtonInput
          type="submit"
          name="inputSubmit"
          id="inputSubmit"
          value={buttonText}
          onClick={(e) => submitHook(e, text, setText)}
        />
      </FormStyled>
    </FormDiv>
  );
}

export default Form;
