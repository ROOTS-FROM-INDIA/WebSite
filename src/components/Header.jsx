import NavLink from "./Link";

function Header() {
  return (
    <div className="bg-secondary flex justify-between items-center p-5 sm:bg-white z-30 fixed top-0 left-0 right-0 opacity-100">
      <div className="text-white sm:text-secondary">Logo</div>
      <div className="hidden sm:flex gap-4 md:gap-6 lg:gap-12">
        <NavLink>Home</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Services</NavLink>
        <NavLink>Blogs</NavLink>
        <NavLink>Sign-Up</NavLink>
      </div>
      <div className="sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="15"
          viewBox="0 0 24 15"
          fill="none"
        >
          <path d="M24 0H0V2.88H24V0Z" fill="white" />
          <path d="M24 5.76H0V8.64H24V5.76Z" fill="white" />
          <path d="M0 11.52H24V14.4H0V11.52Z" fill="white" />
        </svg>
      </div>
      <div className="hidden sm:flex">
        <button className="button-secondary">
          Connect With Us
        </button>
      </div>
    </div>
  );
}

export default Header;
