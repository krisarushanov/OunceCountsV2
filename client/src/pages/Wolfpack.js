import React from "react";
// import ContainerChat from "../../../ContainerChat";
import EmergencyCard from "../components/EmergencyCard";
import Jumbotron from "../components/Jumbotron";
import {SocketContext, socket} from 'context/socket';
import Child from 'components/Child';

const Wolfpack = (props) => {
    return (
        <div className="container-fluid">
            <Jumbotron >
                <h1>Wolfpack Name</h1>
                <EmergencyCard emergencyContactObj={{ fName: "Ben", lName: "Smith", pNum: "2145552456" }} />
            </Jumbotron>
            <SocketContext.Provider value={socket}>
      <Child />
      <Child />
      ...
    </ SocketContext.Provider>


        </div>
    )
}

export default Wolfpack