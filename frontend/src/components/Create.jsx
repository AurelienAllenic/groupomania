import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { useForm } from "react-hook-form";
import {AiOutlineCheck} from 'react-icons/ai'
import React, { useRef } from 'react'
import {MainImageCreate, FormStyle, InputStyle, Textarea, ValidateStyle} from "../utils/style/Create"
import {NavElement, NavTitle, NavShape} from "../utils/style/Navbars"
import {TbWorld} from "react-icons/tb"

const Edit = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
    const fileInput = useRef();
    const selectFile = () => {
        fileInput.current.click();
    }
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = data => {
    data.userId = "6321ac5680823ebb6aaf3812";
    axios.post('http://localhost:4000/api/posts', data)
      .then(res => {
        navigate('/my-posts')
      }).catch(err => {
        alert(err.message + ' - Erreur lors de la création de la note')
      });
  }

  return (
    <>
    <MainImageCreate>
    <NavShape>
      <NavTitle>Créer un Post</NavTitle>
      <Link style={linkStyle} to="/my-posts"><NavElement>Voir les publications</NavElement></Link>
      <Link style={linkStyle} to="/"><NavElement>Se déconnecter</NavElement></Link>
      <Link style={linkStyle} to="/"><NavElement>Groupomania<br/><TbWorld/></NavElement></Link>
    </NavShape>
    <Link style={linkStyle} to="/create-post">
        Créer un post
    </Link>
          <FormStyle onSubmit={handleSubmit(onSubmit)}>
            <InputStyle type="text" name="name" placeholder='Titre' {...register('name', { required: true })} />
            <Textarea placeholder='Description' rows="8" {...register('description', { required: true })} />
            <InputStyle type="text" name="imageUrl" placeholder='imageUrl' {...register('imageUrl', { required: true })} />
            <ValidateStyle type="submit" placeholder='valider'>
              <AiOutlineCheck/>
            </ValidateStyle>
        </FormStyle>
    </MainImageCreate>
    </>
  )
}
/*
<input type="file" style={{ "display": "none" }} ref={fileInput} />
            <button onClick={selectFile}>Image</button>*/
export default Edit;
