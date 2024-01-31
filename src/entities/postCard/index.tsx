import React from "react";
import { Link, useParams } from "react-router-dom";

import { ROUTES } from "../../shared/routes";

import { IPost } from "../../shared/types";

const PostCard = ({ id, title, body }: IPost) => {
  const params = useParams<{ postId: string }>();

  return (
    <section className="container py-3 position-relative">
      <div className="min-h-50  p-4 rounded-3 shadow">
        <h1 className="h1 text-uppercase">{title}</h1>
        <p className="fs-6 text-secondary" aria-label="Post number">
          {`Post id: ${id}`}
        </p>
        <p>{body}</p>
        <Link
          className="d-inline-flex align-content-baseline w-a btn btn-danger mt-5"
          to={ROUTES.home}
          state={{ prevState: params.postId }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
            />
          </svg>
          <span className="ms-3">Go Back</span>
        </Link>
      </div>
    </section>
  );
};

export default PostCard;
