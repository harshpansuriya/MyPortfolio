import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <div>
      <div className="flex justify-center align-middle mb-9">
        <h1 className="text-2xl font-bold underline underline-offset-1">
          Social Media
        </h1>
      </div>
      <div className="flex gap-7 justify-center align-middle pb-9">
        <a href="https://github.com/harshpansuriya/" target="_blank">
          <FontAwesomeIcon className="w-5 cursor-pointer" icon={faGithub} />{" "}
        </a>
        <a href="https://twitter.com/harshpansuriya8/" target="_blank">
          <FontAwesomeIcon className="w-5 cursor-pointer" icon={faTwitter} />
        </a>
        <a href="https://linkedin.com/in/harsh-pansuriya/" target="_blank">
          <FontAwesomeIcon className="w-5 cursor-pointer" icon={faLinkedin} />
        </a>
        <a href="mailto: hbpansuriya17@gmail.com" target="_blank">
          <FontAwesomeIcon className="w-5 cursor-pointer" icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
