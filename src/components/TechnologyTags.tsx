import { VFC } from "react";

interface Props {
  name: string;
}

const Tags: VFC<Props> = (props) => {
  const { name } = props;

  return <div className="p-1 mx-1 rounded-sm shadow-inner bg-tag text-white text-sm font-medium">{name}</div>;
}

export default Tags;

