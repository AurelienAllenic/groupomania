import React, {useState, useEffect} from 'react'
import {BsHandThumbsUp} from "react-icons/bs"
import {BsHandThumbsDown} from "react-icons/bs"
import {LikeAndDislike, Like , Dislike} from "../utils/style/SeeOne"
import axios from 'axios'
import { useParams, useNavigate, Link } from "react-router-dom";

const LikesDislikes = (props) => {
  const params = useParams();
  const [like, setLike] = useState(props.post.likes)
  const [dislike, setDislike] = useState(props.post.dislikes)

  const [likeActive, setLikeActive] = useState(false)
  const [dislikeActive, setDislikeActive] = useState(false)
  console.log(props.post)
function LikeBack() {
  const numberLikes = {like : 1};
  axios.post(`http://localhost:4000/api/posts/${params.id}/like`, numberLikes).then((res) => {
    //setLike(res.data);
    //setDislike(res.data);
    console.log("test"+ res.data);
  })
  .catch((error) => {
    console.log(error)
  })
}

  function likef(){
    LikeBack();
    if(likeActive){
      setLikeActive(false)
      setLike(like-1)
    }else{
      setLikeActive(true)
      setLike(like+1)
    }if(dislikeActive){
      setDislikeActive(false)
      setLike(like+1)
      setDislike(dislike-1)
    }
  }

  function dislikef(){
    LikeBack();
    if(dislikeActive){
      setDislikeActive(false)
      setDislike(dislike-1)
    }else{
      setDislikeActive(true)
      setDislike(like+1)
    }if(likeActive){
      setLikeActive(false)
      setDislike(dislike+1)
      setLike(like-1)
    }
  }

  return (
    <>
    <LikeAndDislike>
      <Like onClick={likef}><BsHandThumbsUp />{like}</Like>
      <Dislike onClick={dislikef}><BsHandThumbsDown />{dislike}</Dislike>
    </LikeAndDislike>
    </>
  )
}

export default LikesDislikes