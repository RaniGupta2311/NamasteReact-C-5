import { useState } from "react";
const Title = () => {
    return (
      <a href="/">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/98/87/68/988768ec3bfa29e72e9fcd1ee24493bc.jpg"
          alt="logo"
        />
      </a>
    );
  };



  // Header Component
const Header = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn?<button onClick={()=>setIsLoggedIn(false)}>Logout</button>:<button onClick={()=>setIsLoggedIn(true)}>Login</button>}
    </div>
  );
};
  export default Header;