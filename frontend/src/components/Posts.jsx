import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import {MainImagePosts, LiElement, UlElement} from "../utils/style/Posts"
import {NavCreatePosts, NavTitle, NavShape, NavElementLogoutPosts, NavElementDeletePosts} from "../utils/style/Navbars"
import {TbFloatNone, TbWorld} from "react-icons/tb"
import { useNavigate } from "react-router-dom";
import {SuperContainer} from "../utils/style/Login&Signup"

const Notes = () => {
  const deleteAccount = () => {
    axios.delete(`http://localhost:4000/api/auth/delete`)
    .then(res => {
     localStorage.clear()
      navigate('/')
    }).catch(err => {
      alert(err.message + ' - Erreur lors de la suppression du compte')
    });
  }
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear()
    navigate("/")
  }
 
    const linkStyle = {
    textDecoration: "none",
    color: "black",
    textUnderline: "none",
  };
  const [posts, setNotes] = useState([]);

   useEffect(() => {
    axios
      .get("http://localhost:4000/api/posts")
      .then((res) => 
      {
        setNotes(res.data);
       console.log(res.data)
   
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [user, setUser] = useState([]);

   useEffect(() => {
    axios
      .get("http://localhost:4000/api/auth/")
      .then((res) => 
      {
        setUser(res.data);
       console.log(res.data)
   
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <><MainImagePosts>
    <NavShape>
      <NavTitle>Publications</NavTitle>
      <Link style={linkStyle} to="/create-post"><NavCreatePosts>Créer une publication</NavCreatePosts></Link>
      <NavElementLogoutPosts onClick={logout}>Se déconnecter</NavElementLogoutPosts>
      <NavElementDeletePosts onClick={deleteAccount}>Supprimer son compte</NavElementDeletePosts>
    </NavShape>
      <UlElement id="seeAll">
        {
      posts.map((post) => (
      <LiElement  key={post._id} id={post._id}><Link style={linkStyle} to={`/see-one/${post._id}`}>{post.name}</Link></LiElement>
    )
    )}
      </UlElement>
      </MainImagePosts>
    </>
  );
}

export default Notes;
