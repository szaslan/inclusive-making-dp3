import React from "react";
import { Link } from "react-router-dom";
import "./Machine.css";

const Machine = ({ name, route, info }) => {
  return (
    <Link
      to={{
        pathname: `${window.location.pathname}/${route}`,
        state: {
          name,
          info
        }
      }}
    >
      <div className="machine__name">{name}</div>
    </Link>
  );
};
export default Machine;
