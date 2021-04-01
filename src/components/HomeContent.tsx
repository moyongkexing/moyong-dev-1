import React, { VFC } from "react";
import Link, { LinkProps } from "next/link";
import Image from "next/image";

interface PROPS {
  linkProps: LinkProps;
  imgProps: React.ComponentProps<typeof Image>;
  name: string;
}

const HomeContent: VFC<PROPS> = (props) => {
  const { linkProps, imgProps, name } = props;

  return (
    <Link {...linkProps}>
      <a className="w-44 h-52 xl:h-44 bg-appBg m-5 border-2 border-gray-300 group overflow-hidden text-center">
        <div className="flex justify-center items-center my-4 xl:my-0 xl:h-full xl:transition-all xl:duration-700 xl:ease-in-out transform group-hover:xl:-mt-44">
          <Image className="" {...imgProps} alt="コンテンツの画像" />
        </div>
        <div className="xl:h-full flex justify-center items-center ">
          <span className="xl:pt-3 text-xl font-medium tracking-wider">{name}</span>
        </div>
      </a>
    </Link>
  );
};
export default HomeContent;
