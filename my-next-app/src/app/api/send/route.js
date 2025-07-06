// src/app/api/send/route.js
import {connectToDB} from "../../lib/mongodb.js"
import { Post } from '../../models/Post.js';

export async function POST(request) {
  try {
    await connectToDB();

    const body = await request.json();
    console.log("Data received from frontend:", body);

    const newPost = new Post({
      username: body.title,
      password: body.content,
    });

    const savedPost = await newPost.save();
    console.log(savedPost)
    return Response.json({ status: "success", saved: savedPost });
  } catch (err) {
    console.error("Error saving post:", err);
    return Response.json({ status: "error", message: err.message }, { status: 500 });
  }
}
