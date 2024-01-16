import { Link } from "react-router-dom";

function NavLink({ route, children }) {
  return (
    <Link
      to={route}
      className="text-secondary sm:text-sm md:text-lg font-semibold border-b-2 border-white hover:border-secondary "
    >
      {children}
    </Link>
  );
}

export default NavLink;
