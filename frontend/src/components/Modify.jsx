import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";
import {AiOutlineCheck} from 'react-icons/ai';
import React, { useState, useEffect } from "react";
import {MainImageModify, FormStyle, InputStyle, Textarea, ValidateStyle, LabelStyle, InputNone} from "../utils/style/Create&Modify"
import {NavElement, NavTitle, NavShape, NavElementLogout} from "../utils/style/Navbars"
import {TbWorld} from "react-icons/tb"

const Modify = () => {
  /*let { userId } = useParams();

  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/api/auth/${params.userId}`).then((res) => {
      setUser(res.data);
      console.log(res.data);
    });
  }, []);

  const deleteAccount = (userId) => {
    axios
    .delete(`http://localhost:4000/api/posts/${userId[0]}`)
    .then((res) => {
      navigate('/my-posts')
    })
    .catch((err) => {
      alert(err.message + " - Erreur lors de la modification de la note");
    });
  }*/
  const logout = () => {
    localStorage.clear()
    navigate("/")
  }
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  /*// handle on change according to input name and setState
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };*/
  const params = useParams();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/api/posts/${params.id}`).then((res) => {
      setPost(res.data);
      console.log(res.data);
    });
  }, []);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.imageUrl[0] )
    formData.append("name", data.name )
    formData.append("description", data.description )
    axios
      .put(`http://localhost:4000/api/posts/${params.id}`, formData)
      .then((res) => {
        navigate("/my-posts");
      })
      .catch((err) => {
        console.error(err.response.data);
        alert(err.message + " - Erreur lors de la modification de la note");
      });
  };

  return (
    <>
      <MainImageModify>
    <NavShape>
      <NavTitle>Modifier</NavTitle>
      <Link style={linkStyle} to="/my-posts"><NavElement>Voir les publications</NavElement></Link>
      <NavElementLogout onClick={logout}>Se déconnecter</NavElementLogout>
    </NavShape>
      <FormStyle onSubmit={handleSubmit(onSubmit)}>
        <InputStyle
          type="text"
          name="titre"
          placeholder={post.name}
         // value={note.title}
          //onChange={handleChange}
          {...register("name", { required: true })}
        />
        <Textarea
        placeholder={post.description}
         // value={note.content}
         // onChange={handleChange}
          rows="8"
          {...register("description", { required: true })}
        />
        <LabelStyle htmlFor="imageUrl">Image</LabelStyle>
        <InputNone id="imageUrl" type="file" name="imageUrl" placeholder='image' {...register('imageUrl', { required: true })} />
        <ValidateStyle type="submit" placeholder='valider'>
              <AiOutlineCheck/>
            </ValidateStyle>
        </FormStyle>
      </MainImageModify>
    </>
  );
};

export default Modify;