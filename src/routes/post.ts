import { Request, Response } from 'express';
import PostDao from '../daos/Posts/PostDao';

//names and imports may not be finalized yet from PostDao- kai 
const postDao = new PostDao();

export async function getGlobalFeed(req: Request, res: Response){
  try {
    const posts = await postDao.getGlobalFeed();
    res.status(200).json(posts);
  } catch(err){
    res.status(500).json({err: "something went wrong"})
  }
}

export async function createPost(req: Request, res: Response){
  try {
    const post = await postDao.createPost(req.body)
    res.status(200).json("You were successful in adding the post!")
    res.status(200).json(post);
  } catch(error){
    res.status(500).json({err:"something went wrong"})
  }
}
//works for one user, no follow yet
export async function getUserFeed(req: Request, res: Response){
  try {
    const posts = await postDao.getUserFeed(req.params.postUser);
    res.status(200).json(posts);
  } catch (err){
    res.status(500).json({err: "something went wrong"})
  }
}

//takes in loginToken and timestamp in params
export async function deletePost(req: Request, res: Response){
  try {
    const post = await postDao.deletePost(req.params)
    res.status(200).json('Post was successfully deleted');
  } catch(error){
    res.status(500).json({err:"something went wrong"})
  }
}



