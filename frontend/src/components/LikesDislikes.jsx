import React, {useState, useEffect} from 'react'
import {BsHandThumbsUp} from "react-icons/bs"
import {BsHandThumbsDown} from "react-icons/bs"
import {LikeAndDislike, Like , Dislike} from "../utils/style/SeeOne"
import axios from 'axios'
import { useParams, useNavigate, Link } from "react-router-dom";

const LikesDislikes = (props) => {
  const params = useParams();
  const [like, setLike] = useState(0)
  console.log("props", props);

  useEffect(()=> {
    setLike(props.post.likes)
  }, [props])

  const [likeActive, setLikeActive] = useState(false)

  console.log(props.post)
function LikeBack() {
  const numberLikes = {like : likeActive ? 0 : 1};
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
    }
  }

  return (
    <>
    <LikeAndDislike>
      <Like onClick={likef}><BsHandThumbsUp />{like}</Like>
    </LikeAndDislike>
    </>
  )
}

export default LikesDislikes