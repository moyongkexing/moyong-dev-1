import React from "react";
import type { VFC } from "react";
import Link, { LinkProps } from "next/link";
import Image from "next/image";

interface Props {
  linkProps: LinkProps;
  imgProps: React.ComponentProps<typeof Image>;
  name: string;
}

const HomeContent: VFC<Props> = (props) => {
  const { linkProps, imgProps, name } = props;

  return (
    // hoverすると上に移動
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
    // <Link {...linkProps}>
    //   <a className="w-44 h-52 xl:h-44 bg-blue-200  m-5 cursor-pointer border-2 border-gray-300 text-center overflow-hidden">
    //     <div className="flex justify-center items-center my-4 xl:transition-all xl:duration-500 xl:ease-in-out xl:mt-0 xl:h-full xl:hover:-mt-36 ">
    //       <Image className="" {...imgProps} alt="コンテンツの画像" />
    //     </div>
    //     <span className="z-10">{name}</span>
    //   </a>
    // </Link>
  );
};
export default HomeContent;
