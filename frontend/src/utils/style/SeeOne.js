import styled from "styled-components";
import img from "../../assets/see-one.jpg";
import colors from "./colors";

export const MainImageSeeOne = styled.div`
  background: url(${img}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
  @media (max-width: 414px) {
    height: 103vh;
    width: 103%;
  }
  @media (max-width: 375px) {
    height: 106vh;
    width: 106%;
  }
`;
export const PostCard = styled.div`
  position: absolute;
  left: 26%;
  top: 5%;
  height: 200px;
  margin-right: 500px;
  margin-left: 100px;
  @media (max-width: 820px) {
    left: 15%;
    top: 15%;
  }
  @media (max-width: 768px) {
    left: 10%;
    top: 20%;
  }
  @media (max-width: 414px) {
    left: -15%;
    top: 20%;
    margin-right: none;
    margin-left: none;
  }
`;
export const PostName = styled.h1`
  position: relative;
  left: 50%;
  color: white;
  font-size: 45px;
  @media (max-width: 820px) {
    font-size: 35px;
    left: 40%;
  }
  @media (max-width: 414px) {
    font-size: 35px;
    left: 29%;
  }
  @media (max-width: 375px) {
    font-size: 30px;
    left: 18%;
  }
`;
export const PostDescription = styled.p`
  position: relative;
  left: 10%;
  color: white;
  font-size: 35px;
  font-weight: 600;
  @media (max-width: 820px) {
    font-size: 30px;
  }
`;
export const PostImage = styled.img`
  position: relative;
  left: 25%;
  width: 50%;
  max-width: 1000px;
  min-width: 600px;
  max-height: 400px;
  border-radius: 10px 10px 10px 10px;
  margin-top: 20px;
  @media (max-width: 820px) {
    left: 0%;
    min-width: 400px;
  }
  @media (max-width: 414px) {
    left: 5%;
    min-width: 300px;
  }
`;
export const Buttons = styled.div`
  position: absolute;
  left: 75%;
  bottom: 54%;
  @media (max-width: 820px) {
    left: 37%;
    bottom: 35%;
  }
  @media (max-width: 768px) {
    left: 34%;
    bottom: 20%;
  }
  @media (max-width: 414px) {
    left: 24%;
    bottom: 10%;
  }
  @media (max-width: 375px) {
    bottom: 5%;
  }
`;
export const ModifyButton = styled.button`
  font-size: 20px;
  padding: 0.5rem;
  border-radius: 10px 10px 10px 10px;
  position: relative;
  left: 0%;
  background: linear-gradient(${colors.primary}, ${colors.secondary});
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export const DeleteButton = styled.button`
  font-size: 20px;
  padding: 0.5rem;
  border-radius: 10px 10px 10px 10px;
  position: relative;
  right: -10%;
  cursor: pointer;
  background: linear-gradient(${colors.primary}, ${colors.secondary});
  &:hover {
    opacity: 0.8;
  }
`;

export const LikeAndDislike = styled.div`
  position: absolute;
  left: 77%;
  bottom: 45%;
  @media (max-width: 820px) {
    left: 42%;
    bottom: 40%;
  }
  @media (max-width: 768px) {
    left: 38%;
    bottom: 28%;
  }
  @media (max-width: 414px) {
    left: 33%;
    bottom: 18%;
  }
  @media (max-width: 375px) {
    bottom: 14%;
  }
`;

export const Like = styled.div`
  position: relative;
  left: -20%;
  font-size: 35px;
  color: white;
  display: inline-block;
  &:hover {
    color: ${colors.secondary};
  }
`;
export const Dislike = styled.div`
  position: relative;
  left: 130%;
  font-size: 35px;
  color: white;
  display: inline-block;
  &:hover {
    color: ${colors.secondary};
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  top: 0%;
  left: 0%;
`;
