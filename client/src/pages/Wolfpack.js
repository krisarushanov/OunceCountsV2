import React from "react";
import EmergencyCard from "../components/EmergencyCard";
import Jumbotron from "../components/Jumbotron";
import ContainerChat from "../components/ContainerChat";
import profile from '../images/bgoc.jpeg'

const Wolfpack = (props) => {
    return (
        <div className="container-fluid">
            <Jumbotron >
                <img className="img-fluid float-left profile-pic" src={profile} alt="profile" id="picture" />
                <h1>Wolfpack Name</h1>
            </Jumbotron>
                <EmergencyCard emergencyContactObj={{ fName: "Ben", lName: "Smith", pNum: "2145552456" }} />
       <ContainerChat />
    </div>
  );
    }

export default Wolfpack;