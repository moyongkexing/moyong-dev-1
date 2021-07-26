import Link from "next/link";
import type { VFC } from "react";

const Footer: VFC = () => {
  return (
    <footer className="w-full border-t border-gray-300 flex flex-col items-center text-sm p-4">
      <ul className="flex flex-col items-center w-full justify-between md:w-1/2 md:flex-row lg:w-1/3">
        <li className="mt-4 md:mt-0 sm:ml-4">
          <Link href="/">ホーム</Link>
        </li>
        <li className="mt-4 md:mt-0 sm:ml-4">
          <Link href="/profile">プロフィール</Link>
        </li>
        <li className="mt-4 md:mt-0 sm:ml-4">
          <Link href="/portfolio">作品</Link>
        </li>
        <li className="mt-4 md:mt-0 sm:ml-4">
          <Link href="/contact">お問い合わせ</Link>
        </li>
      </ul>
      <p className="mt-8">&copy; 2021 MO4g-DEV</p>
    </footer>
  );
};
export default Footer;
