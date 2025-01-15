import Link from "next/link";
import NavLink from "@/components/ui/NavLink";
import ContactButton from "../ui/ContactButton";

const Header = () => (
  <div className="header">
    <nav className="bg-gray-100 p-4">
      <div className="container">
        <ul className="flex gap-3">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/about/team">Team</NavLink>
          </li>
          <li>
            <ContactButton />
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
