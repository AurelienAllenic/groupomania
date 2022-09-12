import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/style/colors";
import {AiOutlineLike} from "react-icons/ai"
import {AiOutlineDislike} from "react-icons/ai"

const MainText = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-size: 1.2rem;
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

const LikeDislikes = styled.i`
display: inline-block;
`
const Like = styled.i`
padding-right: 40px;
font-size: 25px;
&:hover{
    color: ${colors.primary}
}`
const Dislike= styled.i`
padding-left: 40px;
font-size: 25px;
&:hover{
    color: ${colors.primary}
}`


function form() {
  return (
    <>
    <MainText><h1>Veuillez rentrer les informations nécessaires à la publication de votre nouveau post</h1></MainText>
    <form>
        <InputsPosition>
        <InputsStyles><input type="text" className="namePost" name="nom du post" value="nom du post"/></InputsStyles>
        <InputsStyles><input type="text" className="descriptionPost" name="description du post" value="description du post"/></InputsStyles>
        <InputsStyles><input type="image" className="imagePost" alt="image du post" value="image"/></InputsStyles>
        <LikeDislikes>
            <Like><AiOutlineLike /></Like>
            <Dislike><AiOutlineDislike/></Dislike>
        </LikeDislikes>
        <Link to="/seeAll"><InputsStyles><input type="submit" className="submitPost" alt="validation du post" value="valider"/></InputsStyles></Link>
        
        </InputsPosition>
    </form>
    </>
  )
}

export default form