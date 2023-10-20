import React from "react";
import { Container, FormContainer, LeftContent, RightContent } from "./styles";
import Head from "../../components/Helpers/Head";
import Button from "../../components/Button";
import Input from "../../components/Input";
import emailImg from "../../assets/icons/email.svg";
import passwordImg from "../../assets/icons/password.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Este campo é obrigatório"),
  email: yup
    .string()
    .email("É necessário informar um e-mail válido")
    .required("Este campo é obrigatório"),
  password: yup.string().required("Este campo é obrigatório"),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const handleSignUpForm = (data) => {
    alert("Campos validados com sucesso");
    reset();
  };

  return (
    <>
      <Head title="Cadastrar" description="Página de Cadastro." />
      <Container>
        <LeftContent>
          <p>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </p>
        </LeftContent>
        <RightContent>
          <h2>Comece agora grátis</h2>
          <p>Crie sua conta e make the change._</p>
          <FormContainer onSubmit={handleSubmit(handleSignUpForm)}>
            <Input
              label="Nome Completo"
              name="name"
              img={emailImg}
              register={register}
              errors={errors.name}
            />
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
            <Button>Cadastrar</Button>
          </FormContainer>
          <p>
            Ao clicar em "criar minha conta grátis", declaro que aceito as
            Políticas de Privacidade e os Termos de Uso da DIO.
          </p>
          <p>
            Já tenho conta. <a href="#">Fazer login</a>
          </p>
        </RightContent>
      </Container>
    </>
  );
};

export default SignUp;
