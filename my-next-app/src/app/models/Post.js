import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  username: String,
  password: String,
});

export const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);











