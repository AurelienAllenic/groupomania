import styled from "styled-components";
import img from "../../assets/posts.jpg";
import colors from "./colors";

export const MainImagePosts = styled.div`
  background: url(${img}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
`;
export const UlElement = styled.ul`
  position: absolute;
  left: 20%;
  display: grid;
  grid-template-columns: repeat(6, 5fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;
export const LiElement = styled.li`
  font-size: 25px;
  margin: 10px;
  background: linear-gradient(${colors.primary}, ${colors.secondary});
  height: 40px;
  width: 200px;
  list-style: none;
  border-radius: 10px 10px 10px 10px;
  text-align: center;
  padding: 35px 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
