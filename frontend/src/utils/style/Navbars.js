import styled from "styled-components";
import colors from "../style/colors";

export const NavShape = styled.nav`
  position: absolute;
  left: 0%;
  height: 100vh;
  background: linear-gradient(${colors.primary}, ${colors.secondary});
  width: 14%;
  border-radius: 0px 10px 10px 0px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  @media (max-width: 820px) {
    height: 15vh;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 768px) {
    height: 18vh;
    width: 100%;
  }
  @media (max-width: 414px) {
    height: 15vh;
    width: 103%;
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 375px) {
    width: 106%;
  }
`;
export const NavTitle = styled.li`
  position: relative;
  text-align: center;
  text-decoration: none;
  list-style: none;
  padding-top: 100px;
  font-size: 35px;
  font-weight: 600;
  @media (max-width: 820px) {
    font-size: 40px;
    left: 38%;
    top: -35%;
  }
  @media (max-width: 768px) {
    left: 40%;
  }
  @media (max-width: 414px) {
    font-size: 22px;
    top: -80%;
    left: 35%;
  }
`;
export const NavElement = styled.li`
  position: relative;
  text-align: center;
  text-decoration: none;
  list-style: none;
  padding-top: 100px;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: ${colors.primary};
  }
  @media (max-width: 820px) {
    font-size: 25px;
    top: 0%;
    left: -0%;
  }
  @media (max-width: 768px) {
    left: -30%;
  }
  @media (max-width: 414px) {
    font-size: 15px;
    top: -50%;
    left: -30%;
    margin: 5px;
  }
`;

export const NavElementLogout = styled.li`
  position: relative;
  text-align: center;
  text-decoration: none;
  list-style: none;
  padding-top: 100px;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: ${colors.primary};
  }
  @media (max-width: 820px) {
    font-size: 25px;
    top: 0%;
    left: 10%;
  }
  @media (max-width: 768px) {
    left: 14%;
  }
  @media (max-width: 414px) {
    font-size: 15px;
    top: -50%;
    left: 7%;
    margin: 5px;
  }
  @media (max-width: 375px) {
    left: 0%;
  }
`;
