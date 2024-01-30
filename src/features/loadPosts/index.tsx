import React, { useState, useEffect } from "react";

import PostsList from "../../entities/postsList";

import { getData } from "../../shared/utils/utils";
import * as API from "../../shared/api/";
import { IPost } from "../../shared/types";

const LoadPosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    getData(API.allPostUrl).then((data) => setPosts(data));
  }, []);
  return (
    <PostsList hasNextPage={true} isNextPageLoading={false} posts={posts} />
  );
};

export default LoadPosts;
