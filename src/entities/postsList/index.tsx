import React from "react";

import { IPost } from "../../shared/types";

const PostsList = ({ posts }: { posts: IPost[] }) => {
  return (
    <ul>
      {posts.map((post: IPost) => {
        return <li key={post.id + Math.random() * 100}>{post.title}</li>; // key with random due to array copying
      })}
    </ul>
  );
};

export default PostsList;
