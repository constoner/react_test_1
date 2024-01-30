import React from "react";

import Header from "../../widgets/header/";
import MainList from "../../widgets/mainList";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex-grow-1">
        <MainList />
      </main>
    </>
  );
};

export default Home;
