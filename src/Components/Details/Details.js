import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaPeriscope } from "react-icons/fa";
import { FaFutbol } from "react-icons/fa";
import { GiMale } from "react-icons/gi";
import maleTeam from "../../Photo/maleTeam.jpg";
import { Link } from "react-router-dom";
import "./Details.css";

const Details = (props) => {
  const {
    strTeamLogo,
    strTeam,
    strCountry,
    strGender,
    strSport,
    strDescriptionEN,
  } = props.detail;

  const style = {
    maxWidth: "90em",
    margin: "2em",
    backgroundColor: "#864aff",
  };

  return (
    <div>
      <header className="detail-banner ">
        <img style={{ width: "50vw" }} src={strTeamLogo} alt={strTeam} />
      </header>

      <main style={{ margin: "2em" }}>
        <div className="card mb-3 mx-auto" style={style}>
          <div className="row g-0">
            <div className="col-md-3">
              <img
                style={{ width: "52vh" }}
                src={maleTeam}
                alt={strTeamLogo}
              ></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="text-end">
                  <h5 className="card-title  mini-info-2">{strTeam}</h5>

                  <p className="card-text">
                    <small className=" mini-info">
                      {strCountry} <FaPeriscope />
                    </small>
                  </p>
                  <p className="card-text">
                    <small className=" mini-info">
                      {strSport} <FaFutbol />
                    </small>
                  </p>
                  <p className="card-text">
                    <small className=" mini-info">
                      {strGender} <GiMale />
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text">
          <small className="description">{strDescriptionEN}</small>
        </p>
      </main>
      <footer>
        <div className="d-flex justify-content-center">
          <h2 className="m-3 icons">
            <FaFacebook />
            <FaInstagram />
            <FaPinterestSquare />
          </h2>
        </div>
        <div className=" d-flex justify-content-center pb-5">
          <Link to="/">
            <button type="button" className="btn btn-outline-light ">
              Back to menu
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Details;
