import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuttleSpace } from "@fortawesome/free-solid-svg-icons";

const Headers = () => {
  return (
    <div>
      <header>
        <FontAwesomeIcon className="icon" icon={faShuttleSpace} />
        Ready To Go
      </header>
    </div>
  );
};

export default Headers;
