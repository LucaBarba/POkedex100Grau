import {
  FormDiv,
  FormStyled,
  Title,
  InputDiv,
  TextInput,
  Label,
  ButtonInput,
} from "../styles/form";

import { useState } from "react";

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
