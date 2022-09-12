import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/style/colors";
import {AiOutlineLike} from "react-icons/ai"
import {AiOutlineDislike} from "react-icons/ai"

const Return = styled.a`
position: absolute;
right: 10%;
top: 20%;
font-size: 20px;
`

const Modify = styled.a`
position: absolute;
right: 9.7%;
top: 25%;
font-size: 20px;
`
const Delete = styled.a`
position: absolute;
right: 9.2%;
top: 30%;
font-size: 20px;
`
const LikeDislikes = styled.i`
display: inline-block;
`
const Like = styled.i`
font-size: 25px;
position: absolute;
right: 12%;
top: 36%;
&:hover{
    color: ${colors.primary}
}`
const Dislike= styled.i`
padding-left: 40px;
font-size: 25px;
position: absolute;
right: 9%;
top: 36%;
&:hover{
    color: ${colors.primary}
}`

function SeeIcons() {
  return (
    <>
      <Return><Link to="/seeAll"><button type='submit' className='retour'>Retour</button></Link></Return>
      <Modify><Link to="/modify"><button type='submit' className='modify'>Modifier</button></Link></Modify>
      <Delete><Link to="/delete"><button type='submit' className='delete'>Supprimer</button></Link></Delete>
      <LikeDislikes>
            <Like><AiOutlineLike /></Like>
            <Dislike><AiOutlineDislike/></Dislike>
        </LikeDislikes>
    </>
  )
}

export default SeeIcons