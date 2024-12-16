import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h1>NAVBAR</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/program">Programs</NavLink>
    </div>
  );
};

export default NavBar;
