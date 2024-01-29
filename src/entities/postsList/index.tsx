import React from "react";

import { IPost } from "../../shared/types";

const PostsList = ({ posts }: { posts: IPost[] }) => {
  return (
    <ul>
      {posts.map((post: IPost) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ul>
  );
};

export default PostsList;
