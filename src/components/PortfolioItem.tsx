import React, { VFC } from "react";
import Image from "next/image";
import Tags from "src/components/TechnologyTags";
import ScheduleIcon from "@material-ui/icons/Schedule";
import TechnologyTypes from "src/enums/TechnologyTypes";

interface PROPS {
  href: string,
  src: string,
  name: string,
  created_at: string,
  tags: TechnologyTypes[],
  text: string[],
}
const PortfolioItem: VFC<PROPS> = (props) => {
  const { href, src, name, created_at, tags, text } = props;
  return (
    <div className="flex flex-col w-11/12 my-5 xl:py-5 xl:px-10 border shadow-md xl:flex-row">
      <a
        className="flex justify-center items-center mt-5 xl:mt-0 xl:w-2/5"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={src} width={450} height={270} />
      </a>
      <div className="flex flex-col justify-center items-center m-5 xl:w-3/5 xl:justify-start xl:items-start">
        <h1 className="text-lg text-black xl:text-2xl font-bold">{name}</h1>
        <p className="text-sm text-black xl:mt-2">
          <ScheduleIcon className="text-sm mx-1" />
          {created_at}
        </p>
        <div className="flex mt-2">
          {tags.map((tag) => (
            <Tags name={tag} />
          ))}
        </div>
        <div className="mt-2 sm:w-4/5 md:2/3 xl:w-full">
          {text.map((row) => (
            <p className="text-sm text-black xl:text-base xl:my-1">{row}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PortfolioItem;
