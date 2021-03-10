import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Details from "../Details/Details";

const TeamDetails = () => {
  const { idTeam } = useParams();
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams));
  }, [idTeam]);

  return (
    <div>
      {team.map((detail) => (
        <Details key={detail.idTeam} detail={detail} />
      ))}
    </div>
  );
};

export default TeamDetails;
