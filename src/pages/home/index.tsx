import React from "react";

import Header from "../../widgets/header/";
import LoadPosts from "../../features/loadPosts";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex-grow-1">
        <div className="h-100">
          <LoadPosts />
        </div>
      </main>
    </>
  );
};

export default Home;
