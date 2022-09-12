import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/style/colors";

const MainText = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
`;
const InputsPosition = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InputsStyles = styled.a`
  margin: 10px;
  border: none;
  &:focus {
    outline: none;
  }
`;

function Signup() {
  return (
    <div>
      <Link to="/login">
        <nav>Se connecter</nav>
      </Link>
      <MainText>
        <h1>Créer un compte</h1>
      </MainText>
      <InputsPosition>
        <InputsStyles>
          <input
            type="text"
            name="identifiant"
            placeholder="adresse email"
            required="true"
          ></input>
        </InputsStyles>
        <InputsStyles>
          <input
            type="password"
            name="identifiant"
            placeholder="mot de passe"
            required
          ></input>
        </InputsStyles>
        <InputsStyles>
          <Link to="/seeAll">
            <input type="submit" name="valider" value="Valider"></input>
          </Link>
        </InputsStyles>
      </InputsPosition>
    </div>
  );
}

export default Signup;
