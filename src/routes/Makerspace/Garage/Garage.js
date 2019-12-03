import React from "react";
import Machine from "../../../components/Machine/Machine";
import "./Garage.css";
import { MACHINES } from "./MACHINES_ROUTES";

const Garage = () => {
  return (
    <div className="garage__container">
      <h1>Select a Machine</h1>
      {MACHINES.map(machines => {
        return (
          <Machine
            name={machines.name}
            route={machines.route}
            info={machines.info}
          />
        );
      })}
    </div>
  );
};

export default Garage;
