import React from "react";

import Logo from "../../shared/ui/logo";
import Contacts from "../../shared/ui/contacts";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="d-flex">
          <Logo />
          <Contacts />
        </div>
      </div>
    </header>
  );
};

export default Header;
