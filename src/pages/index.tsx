import type { VFC } from "react";
import Image from "next/image";
import Footer from "src/components/Footer";
import HomeContent from "src/components/HomeContent";
import SnsIconButton from "src/components/SnsIconButton";
import SnsIconTypes from "../enums/SnsIconTypes";
import styles from "../styles/hover.module.css";

const homeContentItem = [
  {
    name: "Profile",
    href: "/profile",
    src: "/resume.png",
  },
  {
    name: "Works",
    href: "/works",
    src: "/laptop.png",
  },
  {
    name: "Contact",
    href: "/contact",
    src: "/postbox.png",
  },
];
const snsIcon = [
  {
    name: SnsIconTypes.twitter,
    href: "https://twitter.com/watar_of_echigo",
    label: "twitterのリンク",
  },
  {
    name: SnsIconTypes.gitHub,
    href: "https://github.com/moyongkexing",
    label: "githubのリンク",
  },
  {
    name: SnsIconTypes.qiita,
    href: "https://qiita.com/moyongkexing",
    label: "qiitaのリンク",
  },
];
const siteNameLiteral = Array.from("moyong-dev");
const myNameLiteral = Array.from("Katsuyuki_Suenaga");

const Home: VFC = () => {
  return (
    <div className="bg-white w-full flex flex-col justify-center items-center shadow-xl border-2 border-gray-300 md:w-11/12 xl:w-10/12">
      <p className="mt-10 mb-5 text-black uppercase text-4xl font-bold tracking-wide cursor-pointer xl:text-5xl">
        {siteNameLiteral.map((t, index) => (
          <span key={index} className={styles.hvrGrow}>
            {t}
          </span>
        ))}
      </p>

      <div className="w-full pb-5 flex flex-col items-center sm:flex-row sm:pb-10 sm:justify-center border-b border-gray-300">
        {homeContentItem.map((item) => (
          <HomeContent
            key={item.name}
            linkProps={{ href: item.href }}
            imgProps={{
              src: item.src,
              alt: item.name,
              width: 109,
              height: 128,
            }}
            name={item.name}
          />
        ))}
      </div>

      <div className="w-full py-5 flex flex-col items-center md:flex-row md:justify-around border-b border-gray-300">
        <div className="my-4 md:border-r border-gray-300 sm:w-7/12">
          <div className="flex flex-col items-center">
            <p className="text-3xl text-black font-bold mt-1 md:text-4xl xl:text-5xl tracking-wider">
              {myNameLiteral.map((t, index) => (
                <span key={index} className={styles.hvrGrow}>
                  {t}
                </span>
              ))}
            </p>
            <p className="text-2xl text-black font-bold mt-1 md:text-3xl">college student</p>
          </div>
          <div className="flex justify-center my-2 sm:my-4">
            {snsIcon.map((sns) => (
              <SnsIconButton key={sns.name} sns={sns.name} href={sns.href} ariaLabel={sns.label} />
            ))}
          </div>
        </div>

        <div className="my-5 sm:w-5/12 flex justify-center items-center">
          <Image className="rounded-full" src="/moyong.jpg" alt="運営者の画像" width={250} height={250} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
