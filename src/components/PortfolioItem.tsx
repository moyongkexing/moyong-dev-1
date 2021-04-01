import React, { VFC } from "react";
import Image from "next/image";
import Tags from "src/components/TechnologyTags";
import ScheduleIcon from "@material-ui/icons/Schedule";
import TechnologyTypes from "src/enums/TechnologyTypes";

interface PROPS {
  description: {
    href: string,
    src: string,
    name: string,
    created_at: string,
    tags: TechnologyTypes[],
    text: string[],
  };
}
const PortfolioItem: VFC<PROPS> = (props) => {
  const { description } = props;
  return (
    <div className="flex w-11/12 py-5 px-10 border shadow-md">
      <div className="w-2/5 m-5">
        <a href={description.href}>
          <Image src={description.src} width={450} height={300} />
        </a>
      </div>
      <div className="w-3/5 m-5">
        <h1 className="my-3 text-2xl font-bold">{description.name}</h1>
        <p className="my-3 text-sm ">
          <ScheduleIcon className="text-sm mx-1" />
          {description.created_at}
        </p>
        <div className="flex my-3">
          {description.tags.map((tag) => (
            <Tags name={tag} />
          ))}
        </div>
        {description.text.map((row) => (
          <p className="">{row}</p>
        ))}
      </div>
    </div>
  );
};
export default PortfolioItem;
