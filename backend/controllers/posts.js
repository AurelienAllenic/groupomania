const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const fs = require("fs");
const AdminUser = require("../admin/admin");

exports.create = (req, res, next) => {
  console.log(req.body);
  const postObject = req.body;
  console.log(req.auth);
  delete postObject._id;
  const post = new Post({
    ...postObject,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get("host")}/assets/images/${
      req.file.filename
    }`,
    likes: 0,
    dislikes: 0,
    usersLiked: [" "],
    usersDisliked: [" "],
  });
  post
    .save()
    .then(() => {
      res.status(201).json({ message: "Objet enregistré !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.delete = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      if (post.userId != req.auth.userId) {
        res.status(401).json({ message: "Not authorized" });
      } else if (post.userId == req.auth.userId || user == AdminUser) {
        const filename = post.imageUrl.split("assets/images/")[1];
        fs.unlink(`assets/images/${filename}`, () => {
          Post.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: "Post supprimé" }))
            .catch((error) => res.status(400).json({ error }));
          console.log("Post supprimé");
        });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.displayOne = (req, res, next) => {
  console.log("test du getOnePost");
  Post.findOne({
    _id: req.params.id,
  })
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.modify = (req, res, next) => {
  const postObject = req.file
    ? {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get("host")}/../../assets/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  delete postObject._userId;
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      if (post.userId != req.auth.userId) {
        res.status(401).json({ message: "Not authorized" });
      } else {
        Post.updateOne(
          { _id: req.params.id },
          { ...postObject, _id: req.params.id }
        )
          .then(() => res.status(200).json({ message: "Post modifié!" }))
          .catch((error) => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.displayAll = (req, res, next) => {
  console.log("Affichage de tous les posts");
  Post.find()
    .then((posts) => {
      console.log(posts[0]);
      res.status(200).json(posts);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.like = (req, res, next) => {
  if (req.body.like == 1) {
    Post.updateOne(
      { _id: req.params.id },
      { $push: { usersLiked: req.auth.userId }, $inc: { likes: +1 } }
    )
      .then(() => res.status(200).json({ message: "Post liké !" }))
      .catch((error) => res.status(400).json({ error }));
  }

  if (req.body.like == 0) {
    Post.findOne({ _id: req.params.id })
      .then((post) => {
        if (post.usersLiked.includes(req.auth.userId)) {
          Post.updateOne(
            { _id: req.params.id },
            { $pull: { usersLiked: req.auth.userId }, $inc: { likes: -1 } }
          )
            .then(() =>
              res
                .status(200)
                .json({ message: "Ce Post ne vous intéresse plus !" })
            )
            .catch((error) => res.status(400).json({ error }));
        }
        if (post.usersDisliked.includes(req.auth.userId)) {
          Post.updateOne(
            { _id: req.params.id },
            {
              $pull: { usersDisliked: req.auth.userId },
              $inc: { dislikes: -1 },
            }
          )
            .then(() =>
              res
                .status(200)
                .json({ message: "Ce Post ne vous intéresse plus !" })
            )
            .catch((error) => res.status(400).json({ error }));
        }
      })
      .catch((error) => res.status(400).json({ error }));
  }

  if (req.body.like == -1) {
    Post.updateOne(
      { _id: req.params.id },
      { $push: { usersDisliked: req.auth.userId }, $inc: { dislikes: +1 } }
    )
      .then(() => res.status(200).json({ message: "Post disliké !" }))
      .catch((error) => res.status(400).json({ error }));
    console.log("Post disliké !");
  }
  console.log(req.body);
};
