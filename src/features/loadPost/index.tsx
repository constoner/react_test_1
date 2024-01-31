import React from "react";

const LoadPost = () => {
  return (
    <section className="py-3">
      <div className="container shadow p-5 rounded-3">
        <h1 className="h2">Lorem ipsum dolor sit amet.</h1>
        <p className="fs-6 text-secondary" aria-label="Post number">
          1
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
          repudiandae! Odit eius beatae doloribus culpa reprehenderit cumque
          possimus id eos mollitia velit veritatis voluptatem assumenda sit
          nemo, ea maiores placeat?
        </p>
        <button
          className="btn btn-danger mt-5"
          type="button"
          onClick={() => history.back()} // eslint-disable-line
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
        </button>
      </div>
    </section>
  );
};

export default LoadPost;
