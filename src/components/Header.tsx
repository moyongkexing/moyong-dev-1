import Link from "next/link";
import type { VFC } from "react";

const items = [
  { href: "/", label: "Home" },
  { href: "/profile", label: "Profile" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const Header: VFC = () => {
  return (
    <header className="w-full px-5 flex items-center justify-between border-b border-gray-300 xl:px-20">
      <h1 className="text-black text-3xl font-bold tracking-wide capitalize">MO4g-DEV</h1>
      <nav>
        {items.map(({ href, label }) => {
          return (
            <Link key={href} href={href}>
              <a className="inline-block p-4">{label}</a>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
export default Header;
