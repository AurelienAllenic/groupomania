import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/style/colors";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {MainImageSignup, MainTitle, SuperContainer, LoginCard, Groupomania, InsistOnBlue, InputStyle, ValidateStyle, RedirectSignup} from "../utils/style/Login&Signup"

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
  
  const linkStyle = {
    textDecoration: "none",
    color: "#fd230d",
  };
    const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {axios.post('http://localhost:4000/api/auth/signup', data)
    .then(res => {
      axios.post('http://localhost:4000/api/auth/login', data)
    .then(res => {
      // On enregistre le token dans le localStorage
      localStorage.token = res.data.token;
      // On "enregistre" le token dans la conf. de Axios
      axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      // On "navigate" (redirige) vers '/my-posts'
      navigate('/my-posts');
    }).catch(err => {
      alert(err.message + ' - Paire email / mot de passe incorrecte');
    })

      // On "navigate" (redirige) vers '/my-posts'
    }).catch(err => {
      alert(err.message + ' - Problème lors de la création du compte');
    })
  }
  return (
    <>
      <MainImageSignup></MainImageSignup>
      <SuperContainer>
        <Groupomania><InsistOnBlue>Groupo</InsistOnBlue>mania</Groupomania>
        <LoginCard>
          <MainTitle>Créer un compte</MainTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputStyle type="text" name="email" placeholder="email" rules={{ required: true }} {...register('email', { required: true })}></InputStyle>
            <InputStyle type="password" name="password" placeholder="mot de passe" rules={{ required: true }} {...register('password', { required: true })}></InputStyle>
            <ValidateStyle type="submit" name="valider" value="Valider"></ValidateStyle>
          </form>
        </LoginCard>
      </SuperContainer>
      <RedirectSignup>Vous avez déjà un compte ? Connectez-vous <Link style={linkStyle} to="/">ici</Link></RedirectSignup>
      </>
  );
}

export default Signup;