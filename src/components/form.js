import {
  FormDiv,
  FormStyled,
  Title,
  InputDiv,
  TextInput,
  Label,
  ErrorMessage,
  ButtonInput,
} from "../styles/form";

import { useState } from "react";

function Form({ title, buttonText, submitHook }) {
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

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
            onChange={(e) => {
              setText(e.target.value);
              setErrorMessage(null);
            }}
            className={errorMessage ? "error" : ""}
          ></TextInput>
        </InputDiv>
        <ErrorMessage className={errorMessage ? "visible" : ""}>
          {errorMessage || "placeholder"}
        </ErrorMessage>
        <ButtonInput
          type="submit"
          name="inputSubmit"
          id="inputSubmit"
          value={buttonText}
          onClick={(e) => submitHook(e, text, setErrorMessage)}
        />
      </FormStyled>
    </FormDiv>
  );
}

export default Form;
