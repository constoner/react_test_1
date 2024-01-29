import React, { useState, useEffect } from "react";

import { getData } from "../../shared/utils/utils";
import * as API from "../../shared/api/";

import PostsList from "../../entities/postsList";
import { IPost } from "../../shared/types";

const LoadPosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    getData(API.allPostUrl).then((data) => setPosts(data));
  }, []);

  return <PostsList posts={posts} />;
};

export default LoadPosts;
