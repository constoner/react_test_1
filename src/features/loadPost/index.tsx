import React from "react";
import { useParams } from "react-router-dom";

import PostCard from "../../entities/postCard";

import { ROUTES } from "../../shared/routes";

// import { IPost } from "../../shared/types";
import Loading from "../../shared/ui/loading";

import { useGetPostByIdQuery } from "../../app/api";

// const defaultPost = {
//   id: 0,
//   title: "...",
//   body: "...",
// };

const LoadPost = () => {
  const params = useParams();
  //@ts-ignore
  const URL = params.postId?.slice(ROUTES.postRefix.length);

  //@ts-ignore
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
