import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import {MainImagePosts, LiElement, UlElement} from "../utils/style/Posts"
import {NavElement, NavTitle, NavShape, NavElementLogout, NavElementDelete} from "../utils/style/Navbars"
import {TbFloatNone, TbWorld} from "react-icons/tb"
import { useNavigate } from "react-router-dom";
import {SuperContainer} from "../utils/style/Login&Signup"

const Notes = () => {
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

  return (
    <><MainImagePosts>
    
    
    <NavShape>
      <NavTitle>Publications</NavTitle>
      <Link style={linkStyle} to="/create-post"><NavElement>Créer une publication</NavElement></Link>
      <NavElementLogout onClick={logout}>Se déconnecter</NavElementLogout>
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
