import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PostCard from "../../entities/postCard";

import { getData } from "../../shared/utils/utils";
import * as API from "../../shared/api";
import { ROUTES } from "../../shared/routes";

import { IPost } from "../../shared/types";

const defaultPost = {
  id: 0,
  title: "...",
  body: "...",
};

const LoadPost = () => {
  const params = useParams();
  const URL: string =
    API.onePostUrl + params.postId?.slice(ROUTES.postRefix.length);

  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState<IPost>(defaultPost);

  useEffect(() => {
    getData(URL)
      .then((data) => setPostData(data))
      .then(() => setLoading(false));
  }, []);

  return (
    <PostCard
      id={postData.id}
      title={postData.title}
      body={postData.body}
      loading={loading}
    />
  );
};

export default LoadPost;
