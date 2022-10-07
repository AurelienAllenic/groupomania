import React, {useState} from 'react'
import {BsHandThumbsUp} from "react-icons/bs"
import {BsHandThumbsDown} from "react-icons/bs"
import {LikeAndDislike, Like , Dislike} from "../utils/style/SeeOne"

const LikesDislikes = () => {
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)

  const [likeActive, setLikeActive] = useState(false)
  const [dislikeActive, setDislikeActive] = useState(false)

  function likef(){
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
      <Dislike onClick={dislikef}><BsHandThumbsDown /> {dislike}</Dislike>
    </LikeAndDislike>
    </>
  )
}

export default LikesDislikes