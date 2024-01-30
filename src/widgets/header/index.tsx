import React from "react";

import Logo from "../../shared/ui/logo";
import Contacts from "../../shared/ui/contacts";

const Header = () => {
  return (
    <header className="bg-danger shadow">
      <div className="container p-4">
        <div className="d-flex justify-content-between">
          <Logo />
          <Contacts />
        </div>
      </div>
    </header>
  );
};

export default Header;
