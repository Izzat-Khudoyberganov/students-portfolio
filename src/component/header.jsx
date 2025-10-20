import { Link, NavLink } from "react-router-dom";
import { headerLinks } from "../data";

const Header = () => {
  return (
    <header className="py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to={"/home"} className="text-2xl font-bold text-red-500">
            Students blog site
          </Link>

          <nav className="flex items-center gap-5">
            {headerLinks.map((el) => (
              <NavLink key={el.id} to={el.to}>
                {el.text}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
