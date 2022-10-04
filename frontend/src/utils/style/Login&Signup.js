import styled from "styled-components";
import illustration from "../../assets/illustration-home.jpg";
import illustrationSign from "../../assets/illustration-signup.jpg";
import logo from "../../assets/groupomania.png";
import colors from "./colors";

// Specific styles for login
export const MainImageLogin = styled.div`
  background: url(${illustration}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
  @media (max-width: 414px) {
    height: 126.5vh;
    width: 126.5%;
  }
  @media (max-width: 375px) {
    height: 138.5vh;
    width: 138.5%;
  }
`;
export const RedirectSignup = styled.p`
  position: absolute;
  bottom: 0%;
  left: 1%;
  font-size: 30px;
  color: ${colors.primary};
  @media (max-width: 414px) {
    bottom: -28%;
    left: 5%;
  }
  @media (max-width: 375px) {
    left: 5%;
    bottom: -40%;
    font-size: 25px;
  }
`;
// Specific styles for signup
export const MainImageSignup = styled.div`
  background: url(${illustrationSign}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
  @media (max-width: 414px) {
    height: 126.5vh;
    width: 126.5%;
  }
  @media (max-width: 375px) {
    height: 138.5vh;
    width: 138.5%;
  }
`;
// Generic styles for both

export const SuperContainer = styled.div`
  position: absolute;
  left: 55%;
  top: 0%;
  transform: translateX(-50%);
  width: 50%;
`;
export const Groupomania = styled.h1`
  font-size: 75px;
  color: ${colors.primary};
  position: relative;
  left: 10%;
  width: 100%;
  @media (max-width: 820px) {
    left: -20%;
  }
  @media (max-width: 414px) {
    left: -50%;
  }
  @media (max-width: 375px) {
    left: -49%;
  }
`;
export const MainTitle = styled.h2`
  color: ${colors.primary};
  text-align: center;
  font-size: 55px;
  position: relative;
  padding-bottom: 50px;
`;
export const InsistOnBlue = styled.span`
  color: ${colors.secondary};
`;
export const InputStyle = styled.input`
  width: 100%;
  height: 25px;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  padding: 2rem;
  border-bottom-color: #eee;
  font-size: 45px;
  color: ${colors.primary};
  &:hover {
    border-bottom: 4px solid;
    border-bottom-color: #eee;
  }
  &::placeholder {
    color: ${colors.primary};
  }
  &::focus {
    outline: none;
  }
  @media (max-width: 414px) {
    font-size: 35px;
  }
`;
export const ValidateStyle = styled.input`
  width: 100%;
  height: 100px;
  border: none;
  background-color: transparent;
  color: #eee;
  font-size: 40px;
  padding: 4rem;
  cursor: pointer;
  border-bottom-color: #eee;
  &:hover {
    border-bottom-color: #eee;
    border-bottom: 3px solid;
  }
`;
export const LoginCard = styled.div`
  position: absolute;
  right: 30%;
  @media (max-width: 414px) {
    right: -20%;
  }
  @media (max-width: 375px) {
    right: -40%;
  }
`;
