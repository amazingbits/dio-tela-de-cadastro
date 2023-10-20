import React from "react";
import { HomeContainer, LeftContent, RightContent } from "./styles";
import img from "../../assets/home.png";
import Button from "../../components/Button";
import Head from "../../components/Helpers/Head";

const Home = () => {
  return (
    <>
      <Head title="Home" description="Página home." />
      <HomeContainer>
        <LeftContent>
          <h1>
            <span>Implemente</span> o seu futuro global agora
          </h1>
          <p>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </p>
          <Button>Começar agora</Button>
        </LeftContent>
        <RightContent>
          <img
            src={img}
            alt="Logo da DIO onde há um homem pensativo olhando para um tablet com diversas oportunidades"
          />
        </RightContent>
      </HomeContainer>
    </>
  );
};

export default Home;
