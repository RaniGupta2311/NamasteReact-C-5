import { useState } from "react";
import {Link} from "react-router-dom"
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
          <Link to="/"><li>Home</li></Link>
          {/* <a href="/about"><li>About</li></a> */}
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn?<button onClick={()=>setIsLoggedIn(false)}>Logout</button>:<button onClick={()=>setIsLoggedIn(true)}>Login</button>}
    </div>
  );
};
  export default Header;