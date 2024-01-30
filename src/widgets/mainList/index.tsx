import React from "react";

import LoadPosts from "../../features/loadPosts";

const MainList = () => {
  return (
    <section className="h-100 position-relative">
      <h1 className="visually-hidden">The List of all Posts</h1>
      <LoadPosts />
    </section>
  );
};

export default MainList;
