import React from "react";
import { useParams } from "react-router-dom";

import Loading from "../../shared/ui/loading";
import PostCard from "../../entities/postCard";

import { ROUTES } from "../../shared/routes";
import { useGetPostByIdQuery } from "../../shared/api";

const LoadPost = () => {
  const params = useParams<{ postId: string }>();

  const URL: string | any = params.postId?.slice(ROUTES.postRefix.length);

  const { data, isLoading } = useGetPostByIdQuery(URL);

  return (
    <div className="position-relative h-100">
      {isLoading ? (
        <Loading />
      ) : (
        <PostCard id={data.id} title={data.title} body={data.body} />
      )}
    </div>
  );
};

export default LoadPost;
