import React from "react";
import ReactDOM from "react-dom/client";

const data = [
  { r: 1 },
  { r: 2 },
  { r: 3 },
  { r: 4 },
  { r: 5 },
  { r: 6 },
  { r: 7 },
  { r: 8 },
  { r: 9 },
  { r: 10 },
  { r: 11 },
  { r: 12 },
  { r: 13 },
  { r: 14 },
  { r: 15 },
  { r: 16 },
  { r: 17 },
];

const App = () => {
  return (
    <div id="app">
      <Header />
      <Main />
      <Footer/>
    </div>
  );
};

const Header = () => {
  return (
    <div id="header">
      <Logo />
      <Nav />
    </div>
  );
};
const Logo = () => {
  return (
    <div className="logo-container">
      <img
        className="logo-image"
        src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png"
      />
    </div>
  );
};

const Nav = () => {
  return (
    <ul id="nav-ul">
      <li>Home</li>
      <li>About</li>
      <li>Contacts</li>
      <li>Cart</li>
    </ul>
  );
};

const Main = () => {
  return (
    <div className="main">
      <Search />
      <ListContainer restaurants={data} />
    </div>
  );
};

const Search = () => <h2>Search Bar</h2>;

const ListContainer = (props) => {
  const { restaurants } = props;
  return  (<div className="list-container" >
          {
            restaurants.map(res=>RestaurantCard(res))
          }
          </div>
          )
};

const RestaurantCard = (props) => {
  console.log(props.r)
  return (
    <div className="restaurant-card">
      <h2>{props.r}</h2>
    </div>
  );
};

const Footer=()=>{
  return <div id="footer"></div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
