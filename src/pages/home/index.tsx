import React from "react";

import Header from "../../widgets/header/";
import LoadPosts from "../../features/loadPosts";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <LoadPosts />
        </div>
      </main>
    </>
  );
};

export default Home;
