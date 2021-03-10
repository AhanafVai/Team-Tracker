import React, { useEffect, useState } from "react";
import Team from "../Team/Team";
import "./LeaguePage.css";

const LeaguePage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);

  return (
    <div>
      <header className="header-img">
        <h1 className="banner-text">Premier League Teams</h1>
      </header>
      <div className="league-container">
        {teams.map((team) => (
          <Team key={team.idTeam} team={team} />
        ))}
      </div>
    </div>
  );
};

export default LeaguePage;
