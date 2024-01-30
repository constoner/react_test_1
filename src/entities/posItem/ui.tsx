import React from "react";

import { IPost } from "../../shared/types";

interface ICard extends IPost {
  length: number;
}

const PostCard = ({ id, title, body, length }: ICard) => {
  return (
    <article className="card mt-3 w-100 h-100 shadow">
      <h2 className="card-header p-2 fs-6 fw-bolder bg-danger-subtle text-uppercase d-flex lh-sm">
        <span className="fs-6 fw-light me-2">{id}.</span>
        {title}
      </h2>
      <div className="card-body p-3 m-0 lh-sm">
        <p>
          {body.length <= length
            ? body
            : body.slice(0, length - 3).padEnd(length, ".")}
        </p>
        <a
          className="position-absolute bottom-0 end-0 me-3 mb-3 btn btn-outline-danger"
          href="#!"
        >
          View all
        </a>
      </div>
    </article>
  );
};

export default PostCard;
