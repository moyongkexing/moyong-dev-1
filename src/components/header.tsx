import Link from "next/link";
import type { VFC } from "react";

const items = [
  { href: "/", label: "Home" },
  { href: "/profile", label: "Profile" },
  { href: "/works", label: "Works" },
  { href: "/Contact", label: "Contact" },
];

const Header: VFC = () => {
  return (
    <header className="w-full px-5 flex items-center justify-between border-b border-gray-300 xl:px-20">
      <h1 className="text-black text-2xl font-bold tracking-wide capitalize">moyong-dev</h1>
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
