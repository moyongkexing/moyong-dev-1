import type { VFC } from "react";
import type TechTypes from "src/enums/TechTypes";

interface PROPS {
  name: TechTypes;
}

const TechTag: VFC<PROPS> = (props) => {
  const { name } = props;
  return <div className="text-xs p-1 mx-1 rounded-sm shadow-inner bg-tag text-white sm:text-sm font-medium">{name}</div>;
}

export default TechTag;
