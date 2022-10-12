import styled from "styled-components";
import img from "../../assets/see-one.jpg";
import colors from "./colors";

export const MainImageSeeOne = styled.div`
  background: url(${img}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
  @media (max-width: 414px) {
    height: 109vh;
    width: 109%;
  }
  @media (max-width: 375px) {
    height: 106vh;
    width: 106%;
  }
`;
export const PostCard = styled.div`
  position: fixed;
  left: 23%;
  top: 5%;
  height: 200px;
  margin-right: 500px;
  margin-left: 100px;
  @media (max-width: 820px) {
    left: 7%;
    top: 15%;
  }
  @media (max-width: 768px) {
    left: 5%;
  }
  @media (max-width: 414px) {
    position: absolute;
    left: -10%;
    top: 15%;
    margin-right: none;
    margin-left: none;
  }
  @media (max-width: 375px) {
    left: 0%;
    top: 12%;
  }
`;
export const PostName = styled.h1`
  position: relative;
  left: 50%;
  color: white;
  font-size: 40px;
  @media (max-width: 820px) {
    font-size: 35px;
    left: 40%;
  }
  @media (max-width: 414px) {
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
  font-size: 30px;
  font-weight: 600;
  @media (max-width: 820px) {
    font-size: 30px;
    left: 0%;
  }
`;
export const PostImage = styled.img`
  position: relative;
  left: 11%;
  width: 50%;
  max-width: 500px;
  min-width: 500px;
  max-height: 500px;
  border-radius: 10px 10px 10px 10px;
  margin-top: 20px;
  @media (max-width: 820px) {
    left: 0%;
  }
  @media (max-width: 414px) {
    left: 5%;
    min-width: 300px;
  }
  @media (max-width: 375px) {
    min-width: 200px;
    margin-top: 0px;
  }
`;
export const Buttons = styled.div`
  position: absolute;
  left: 70%;
  bottom: 54%;
  @media (max-width: 820px) {
    left: 32%;
    bottom: 20%;
  }
  @media (max-width: 768px) {
    left: 32%;
    bottom: 9%;
  }
  @media (max-width: 414px) {
    left: 20%;
    bottom: 5%;
  }
  @media (max-width: 375px) {
    bottom: 5%;
    left: 15%;
  }
`;
export const ModifyButton = styled.button`
  font-size: 30px;
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
  font-size: 30px;
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
  left: 73%;
  bottom: 45%;
  @media (max-width: 820px) {
    left: 37%;
    bottom: 13%;
  }
  @media (max-width: 768px) {
    left: 38%;
    bottom: 3%;
  }
  @media (max-width: 414px) {
    left: 30%;
    bottom: -5%;
  }
  @media (max-width: 375px) {
    bottom: -6%;
  }
`;

export const Like = styled.div`
  position: relative;
  left: 0%;
  font-size: 40px;
  color: white;
  display: inline-block;
  cursor: pointer;
  &:hover {
    color: ${colors.secondary};
  }
`;
export const Dislike = styled.div`
  position: relative;
  left: 150%;
  font-size: 40px;
  cursor: pointer;
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
