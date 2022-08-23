import mongoose from "mongoose";

const postConfig = {
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
};

const postSchema = mongoose.Schema(postConfig);

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
