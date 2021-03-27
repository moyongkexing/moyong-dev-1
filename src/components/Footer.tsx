import type { VFC } from "react";
import Link from "next/link";

const Footer: VFC = () => {
  return (
    <footer className="flex flex-col items-center text-sm p-4">
      <ul className="flex flex-col items-center w-full justify-between sm:flex-row">
        <li className="mt-4 sm:mt-0 sm:ml-4">
          <Link href="/">ホーム</Link>
        </li>
        <li className="mt-4 sm:mt-0 sm:ml-4">
          <Link href="/profile">運営者</Link>
        </li>
        <li className="mt-4 sm:mt-0 sm:ml-4">
          <Link href="/works">作品</Link>
        </li>
        <li className="mt-4 sm:mt-0 sm:ml-4">
          <Link href="/contact">お問い合わせ</Link>
        </li>
      </ul>
      <p className="uppercase mt-8">&copy; 2021 MO4g-DEV</p>
    </footer>
  );
};
export default Footer;
