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
    <div className="flex w-11/12 my-5 py-5 px-10 border shadow-md">
      <div className="w-2/5 m-5">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Image src={src} width={450} height={270} />
        </a>
      </div>
      <div className="w-3/5">
        <h1 className="my-3 text-2xl font-bold">{name}</h1>
        <p className="my-3 text-sm ">
          <ScheduleIcon className="text-sm mx-1" />
          {created_at}
        </p>
        <div className="flex my-3">
          {tags.map((tag) => (
            <Tags name={tag} />
          ))}
        </div>
        {text.map((row) => (
          <p className="my-1">{row}</p>
        ))}
      </div>
    </div>
  );
};
export default PortfolioItem;
