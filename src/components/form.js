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
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 15px 0px 15px 0px;
  text-align: center;
  width: 100%;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
`;

const TextInput = styled.input`
  font-size: 2rem;
  text-align: center;
  border-radius: 15px;
`;

const Label = styled.label`
  padding-left: auto;
  padding-right: auto;
  text-align: center;
`;

const ButtonInput = styled.input`
  margin: 20px 20px;
  height: 2rem;
  text-size
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
