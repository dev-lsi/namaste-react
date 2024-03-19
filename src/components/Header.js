import Nav from "./Nav";
import Logo from "./Logo";
import { useState } from "react";

const Header = () => {
  const [loginName, setLoginName] = useState("Login");
  return (
    <div className="flex justify-between p-4 bg-orange-300 shadow-lg shadow-orange-700">
      <Logo />
      <Nav />
      <button
        className=""
        onClick={() => {
          loginName === "Login"
            ? setLoginName("Logout")
            : setLoginName("Login");
        }}
      >
          {loginName}
      </button>
    </div>
    
  );
};

export default Header;
