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
`;
export const NavTitle = styled.li`
  position: relative;
  text-align: center;
  text-decoration: none;
  list-style: none;
  padding-top: 220px;
  font-size: 35px;
  font-weight: 600;
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
`;
