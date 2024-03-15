import Nav from "./Nav";
import Logo from "./Logo";
import { useState } from "react";

const Header = () => {
  const [loginName, setLoginName] = useState("Login");
  return (
    <div id="header">
      <Logo />
      <Nav />
      <div className="login-container">
        <button
          className="login-btn"
          onClick={() => {
            loginName === "Login"
              ? setLoginName("Logout")
              : setLoginName("Login");
          }}
        >
          {loginName}
        </button>
      </div>
    </div>
  );
};

export default Header;
