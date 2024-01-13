function NavLink({ children }) {
  return (
    <a
      href=""
      className="text-secondary sm:text-sm md:text-lg font-semibold hover:border-b-2 hover:border-secondary "
    >
      {children}
    </a>
  );
}

export default NavLink;
