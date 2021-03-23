import React from "react";
import { Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import SnsIconTypes from "../enums/SnsIconTypes";
import Tooltip from "@material-ui/core/Tooltip";

interface Props {
  sns: SnsIconTypes;
  href: string;
  ariaLabel: string;
}

const SnsIconButton: React.FC<Props> = (props: Props) => {
  const { href, sns, ariaLabel } = props;

  const renderButton = () => {
    switch (sns) {
      case SnsIconTypes.gitHub: {
        return (
          <Tooltip title="GitHub">
            <Button
              className="text-white bg-black mx-2"
              variant="contained"
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={ariaLabel}
            >
              <GitHubIcon />
            </Button>
          </Tooltip>
        );
      }
      case SnsIconTypes.twitter: {
        return (
          <Tooltip title="Twitter">
            <Button
              className="text-white bg-twitter mx-2"
              variant="contained"
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={ariaLabel}
            >
              <TwitterIcon />
            </Button>
          </Tooltip>
        );
      }
      case SnsIconTypes.qiita: {
        return (
          <Tooltip title="Qiita">
            <Button
              className="text-white bg-qiita mx-2"
              variant="contained"
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={ariaLabel}
            >
              <SearchIcon />
            </Button>
          </Tooltip>
        );
      }
      default: {
        return <></>;
      }
    }
  };

  return renderButton();
};

export default SnsIconButton;
