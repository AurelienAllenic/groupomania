import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import {MainImagePosts, LiElement, UlElement} from "../utils/style/Posts"
import {NavElement, NavTitle, NavShape} from "../utils/style/Navbars"
import {TbWorld} from "react-icons/tb"

const Notes = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
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

  /*const logout = () => {
    localStorage.clear();
    Navigate('/')
  }*/

  return (
    <>
    <MainImagePosts>
    <NavShape>
      <NavTitle>Publications</NavTitle>
      <Link style={linkStyle} to="/create-post"><NavElement>Créer une publication</NavElement></Link>
      <Link style={linkStyle} to="/"><NavElement>Se déconnecter</NavElement></Link>
      <Link style={linkStyle} to="/"><NavElement>Groupomania<br/><TbWorld/></NavElement></Link>
    </NavShape>
    <Link style={linkStyle} to="/create-post">
        Créer un post
    </Link>
      <UlElement id="seeAll">
        {
      posts.map((post) => (
      <LiElement key={post._id} id={post._id}><Link to={`/see-one/${post._id}`}>{post.name}</Link></LiElement>
    )
    )}
      </UlElement>
      </MainImagePosts>
    </>
  );
}

export default Notes;
