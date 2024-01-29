import React from "react";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

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
