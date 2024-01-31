import React from "react";

import LoadList from "../../features/loadList";

const MainList = () => {
  return (
    <section className="h-100 position-relative">
      <h1 className="visually-hidden">The List of all Posts</h1>
      <LoadList />
    </section>
  );
};

export default MainList;
