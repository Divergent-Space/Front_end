import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="flex max-h-20 items-center w-full px-6 uppercase font-medium fixed z-50 bg-divergent-blue border-b-2 border-divergent-gold text-divergent-gold">
      <li>
        <Link to={""}>
          <img src="/logo.svg" alt="logo" className="max-h-20 p-2" />
        </Link>
      </li>
      <div className="ml-auto mt-4 sm:mt-0 flex *:sm:m-2 *:sm:px-4 *:sm:py-1 *:m-1 *:px-2 *:py-1">
        <li className="block border-transparent border-b-2 hover:border-divergent-gold transition-all">
          <Link to={"about"}>About</Link>
        </li>
        <li className="block border-transparent border-b-2 hover:border-divergent-gold transition-all">
          <Link to={"contact"}>Contact Us</Link>
        </li>
      </div>
    </ul>
  );
}
