import logo from "../../public/logo-circle.png";
import { SiGithub } from "react-icons/si";
const Navbar = () => {
  return (
    <nav
      className=" max-w-9xl  mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 fixed top-0 w-full z-10"
      aria-label="Global"
    >
      <div className="flex items-center justify-between gap-4">
        <img src={logo} alt="" className="w-9" />
        <a
          className="flex-none text-xl text-gray-200 font-mono  dark:text-white py-8 font-extrabold "
          href="#"
          aria-label="Brand"
        >
          FlexiFlow
        </a>
      </div>
      <a
        href="https://github.com/devhimanshuu/FlexiFlow"
        className="text-rose-500"
      >
        <SiGithub />
      </a>
    </nav>
  );
};

export default Navbar;
