import React from "react";
import { useParams } from "react-router-dom";

import Loading from "../../shared/ui/loading";
import PostCard from "../../entities/postCard";

import { ROUTES } from "../../shared/routes";
import { useGetPostByIdQuery } from "../../app/api";

const LoadPost = () => {
  const params = useParams();

  const URL = params.postId?.slice(ROUTES.postRefix.length);

  const { data, isLoading } = useGetPostByIdQuery(URL);

  return (
    <div className="position-relative">
      {isLoading ? (
        <Loading />
      ) : (
        <PostCard id={data.id} title={data.title} body={data.body} />
      )}
    </div>
  );
};

export default LoadPost;
