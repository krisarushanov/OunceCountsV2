import React from "react";
// import ContainerChat from "../../../ContainerChat";
import EmergencyCard from "../components/EmergencyCard";
import Jumbotron from "../components/Jumbotron";

const Wolfpack = (props) => {
    return (
        <div className="container-fluid">
            <Jumbotron >
                <h1>Wolfpack Name</h1>
                <EmergencyCard emergencyContactObj={{ fName: "Ben", lName: "Smith", pNum: "2145552456" }} />
            </Jumbotron>

        </div>
    )
}

export default Wolfpack;