import React from "react";
import {
  BottomButtons,
  FormContainer,
  LeftContainer,
  LoginContainer,
  RightContainer,
} from "./styles";
import Head from "../../components/Helpers/Head";
import Button from "../../components/Button";
import Input from "../../components/Input";
import emailImg from "../../assets/icons/email.svg";
import passwordImg from "../../assets/icons/password.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("É necessário informar um e-mail válido")
    .required("Este campo é obrigatório"),
  password: yup.string().required("Este campo é obrigatório"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const handleSignInForm = (data) => {
    alert("Formulário validado com sucesso");
    reset();
  };

  return (
    <>
      <Head title="Login" description="Página de Login." />
      <LoginContainer>
        <LeftContainer>
          <p>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </p>
        </LeftContainer>
        <RightContainer>
          <h2>Faça seu cadastro</h2>
          <p>Faça seu login e make the change._</p>
          <FormContainer onSubmit={handleSubmit(handleSignInForm)}>
            <Input
              label="E-mail"
              name="email"
              img={emailImg}
              register={register}
              errors={errors.email}
              autoComplete="username"
            />
            <Input
              label="Senha"
              name="password"
              img={passwordImg}
              type="password"
              register={register}
              errors={errors.password}
              autoComplete="current-password"
            />
            <Button>Entrar</Button>
          </FormContainer>
          <BottomButtons>
            <a href="#">Esqueci minha senha</a>
            <a href="#">Criar conta</a>
          </BottomButtons>
        </RightContainer>
      </LoginContainer>
    </>
  );
};

export default Login;
