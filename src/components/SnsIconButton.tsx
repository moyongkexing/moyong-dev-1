import React, { VFC } from "react";
import { Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import SnsTypes from "../enums/SnsTypes";
import Tooltip from "@material-ui/core/Tooltip";

interface PROPS {
  sns: SnsTypes;
  href: string;
  ariaLabel: string;
}

const SnsIconButton: VFC<PROPS> = (props) => {
  const { href, sns, ariaLabel } = props;

  const renderButton = () => {
    switch (sns) {
      case SnsTypes.gitHub: {
        return (
          <Tooltip title="GitHub">
            <Button
              className="text-white bg-black mx-2"
              variant="contained"
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={ariaLabel}
            >
              <GitHubIcon />
            </Button>
          </Tooltip>
        );
      }
      case SnsTypes.twitter: {
        return (
          <Tooltip title="Twitter">
            <Button
              className="text-white bg-twitter mx-2"
              variant="contained"
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={ariaLabel}
            >
              <TwitterIcon />
            </Button>
          </Tooltip>
        );
      }
      case SnsTypes.qiita: {
        return (
          <Tooltip title="Qiita">
            <Button
              className="text-white bg-qiita mx-2"
              variant="contained"
              href={href}
              target="_blank"
              rel="noreferrer noopener"
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
