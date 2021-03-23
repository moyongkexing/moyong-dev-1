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
    <div className="w-44 h-44 bg-blue-200 flex justify-center items-center m-5">
      <Link {...linkProps}>
        <a>
          <div>
            <Image {...imgProps} alt="コンテンツの画像" />
          </div>
          {/* <span>{name}</span> */}
        </a>
      </Link>
    </div>
  );
};
export default HomeContent;
