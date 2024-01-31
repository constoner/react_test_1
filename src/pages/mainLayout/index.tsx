import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../widgets/header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
