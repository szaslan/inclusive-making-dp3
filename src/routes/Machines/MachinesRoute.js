import React from "react";
import { MACHINES } from "./MACHINES";
import "./MachinesRoute.css";
const MachinesRoute = ({ match }) => {
  const machine = MACHINES[match.params.machineName];
  return (
    <div className="machines__container">
      <div className="machines__info--container">
        <div className="machines__info--text">
          <h1>{machine.name}</h1>
          <p>{machine.info}</p>
          {machine.safety_info.gear.length > 0 && (
            <div>
              <p>
                Protective Equipment:{" "}
                <span style={{ fontStyle: "italic" }}>
                  {machine.safety_info.gear}
                </span>
              </p>
            </div>
          )}
        </div>
        <img
          src={machine.picture}
          alt={machine.name}
          role="presentation"
          className="machine__picture"
        />
      </div>

      {machine.safety_info.hazards && (
        <>
          <h2>Potential Hazards</h2>
          <ul className="machines__list">
            {machine.safety_info.hazards.map((hazard, key) => {
              return <Hazard hazard={hazard} key={key} />;
            })}
          </ul>
        </>
      )}
      {machine.safety_info.quote && <Quote quote={machine.safety_info.quote} />}
    </div>
  );
};

export default MachinesRoute;

const Hazard = ({ hazard }) => {
  return (
    <li className="hazard__list-item">
      <img src={hazard.icon} alt={hazard.alt} className="hazard__icon" />
      <div>{hazard.info}</div>
    </li>
  );
};

const Quote = ({ quote }) => {
  return (
    <div className="quote__container">
      {quote.name} says{" "}
      <span style={{ fontWeight: "700" }}>"{quote.text}"</span>
    </div>
  );
};
