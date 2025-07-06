import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
});

export const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);










