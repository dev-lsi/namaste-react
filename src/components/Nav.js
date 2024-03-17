import { Link } from "react-router-dom";

const Nav = () => {
    return (
      <ul id="nav-ul">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/contacts"}>Contacts</Link></li>
        <li>Cart</li>
      </ul>
    );
  };

  export default Nav;