import React from "react";
import { MainHeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const MainHeader = () => {
  return (
    <MainHeaderContainer>
      <img src={logo} alt="Logo da DIO" />
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/login">Entrar</NavLink>
        <NavLink to="/signup">Cadastrar</NavLink>
      </nav>
    </MainHeaderContainer>
  );
};

export default MainHeader;
