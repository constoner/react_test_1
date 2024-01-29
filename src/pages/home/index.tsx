import React from "react";

import Header from "../../widgets/header/";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Home page</h1>
          <p>Posts list</p>
        </div>
      </main>
    </>
  );
};

export default Home;
