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
    </div>
  );
};
  export default Header;