import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {MainImageSeeOne, PostCard, PostName, PostDescription, PostImage, Buttons, ModifyButton, DeleteButton, LikeAndDislike, Like , Dislike, ImageContainer} from "../utils/style/SeeOne"
import {NavElement, NavTitle, NavShape, NavElementLogout} from "../utils/style/Navbars"
import {TbWorld} from "react-icons/tb"
import {BsHandThumbsUp} from "react-icons/bs"
import {BsHandThumbsDown} from "react-icons/bs"

const SeeOne = () => {
  const logout = () => {
    localStorage.clear()
    navigate("/")
  }
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  const params = useParams();
  const navigate = useNavigate();
  console.log(params)
  //const noteId = window.location.search.split("?id=").join("");
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/api/posts/${params.id}`).then((res) => {
      setPost(res.data);
      console.log(res.data);
    });
  }, []);

  const deletePost = (postId) => {
    axios
    .delete(`http://localhost:4000/api/posts/${postId}`)
    .then((res) => {
      navigate('/my-posts')
    })
    .catch((err) => {
      alert(err.message + " - Erreur lors de la modification de la note");
    });
  }

  return (
    <>
    <MainImageSeeOne>
    <NavShape>
      <NavTitle>Voir</NavTitle>
      <Link style={linkStyle} to="/my-posts"><NavElement>Voir les publications</NavElement></Link>
     <NavElementLogout onClick={logout}>Se déconnecter</NavElementLogout>
    </NavShape>
      <PostCard>
        <PostName id={post._id}>{post.name}</PostName>
        <PostDescription id={post._id}>{post.description}</PostDescription>
        <ImageContainer>
        <PostImage src={post.imageUrl} id={post._id} alt="post"></PostImage>
        </ImageContainer>
        </PostCard>
        <Buttons>
        <ModifyButton>
        <Link style={linkStyle} to={`/modify/${post._id}`}>Modifier</Link>
        </ModifyButton>
        <DeleteButton onClick={() => deletePost(post._id)}>Supprimer</DeleteButton>
        </Buttons>
        <LikeAndDislike><Like><BsHandThumbsUp /></Like><Dislike><BsHandThumbsDown /></Dislike></LikeAndDislike>
      </MainImageSeeOne>
    </>
  );
};

export default SeeOne;