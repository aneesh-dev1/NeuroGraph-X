import express from 'express';
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';

import Post from '../mongoDb/models/post.js'

dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_CLOUD_APIKEY,
    api_secret : process.env.CLOUDINARY_CLOUD_APISECRET
});


router.route('/').get(async (req, res) => {
    try {
      const posts = await Post.find({});
      console.log(posts);
      res.status(200).json({ success: true, data: posts });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
    }
  });

router.route('/').post(async(req,res) => {
    try {
    const {name , prompt , photo} = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
        name,
        prompt,
        photo : photoUrl.url
    })
    res.status(201).json({success:true, data: newPost})
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:error})
    }
})

export default router;