import ScheduleIcon from "@material-ui/icons/Schedule";
import GitHubIcon from "@material-ui/icons/GitHub";
import Image from "next/image";
import type { VFC } from "react";
import React from "react";
import TechTag from "src/components/TechTag";
import type TechTypes from "src/enums/TechTypes";

interface PROPS {
  href: string,
  git: string,
  src: string,
  name: string,
  created_at: string,
  tags: TechTypes[],
  text: string[],
}
const PortfolioItem: VFC<PROPS> = (props) => {
  const { href, git, src, name, created_at, tags, text } = props;
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
        <div className="flex items-center">
          <h1 className="text-lg text-black xl:text-2xl font-bold">{name}</h1>
          <a className="cursor-pointer" href={git} target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="ml-3" />
          </a>
        </div>
        <p className="text-sm text-black xl:mt-2">
          <ScheduleIcon className="text-sm mx-1" />
          {created_at}
        </p>
        <div className="flex mt-2">
          {tags.map((tag, index) => {
            return <TechTag key={index} name={tag} />;
          })}
        </div>
        <div className="mt-2 sm:w-4/5 md:2/3 xl:w-full">
          {text.map((row, index) => {
            return (
              <p key={index} className="text-sm text-black xl:text-base xl:my-1">
                {row}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default PortfolioItem;
