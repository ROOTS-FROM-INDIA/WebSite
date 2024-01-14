function NavLink({ children }) {
  return (
    <a
      href=""
      className="text-secondary sm:text-sm md:text-lg font-semibold border-b-2 border-white hover:border-secondary "
    >
      {children}
    </a>
  );
}

export default NavLink;
