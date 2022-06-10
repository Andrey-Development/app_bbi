import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

import { TextInput } from "../../components/TextInput";
import { EmailInput } from "../../components/EmailInput";
import { PhoneInput } from "../../components/PhoneInput";
import { PasswordInput } from "../../components/PasswordInput";
import {DateInput} from "../../components/DateInput";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <TextInput placeholder="Nome Completo" />
        <EmailInput />
        <PhoneInput placeholder="Celular" />
        <DateInput placeholder="Data de Nascimento" />
        <PasswordInput placeholder="Senha" />
        <PasswordInput placeholder="Confirmar Senha" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
