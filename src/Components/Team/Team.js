import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Team = (props) => {
  const { strTeam, strSport, idTeam, strTeamLogo } = props.team;
  const style = { width: "18rem" };

  return (
    <div className="card" style={style}>
      <img src={strTeamLogo} alt={strTeam} />
      <div className="card-body">
        <h5 className="card-title">{strTeam}</h5>
        <p className="card-text">Sports type:{strSport}</p>
        <Link to={`/team/${idTeam}`}>
          <button type="button" className="btn btn-outline-dark">
            Explore <FaLongArrowAltRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Team;
