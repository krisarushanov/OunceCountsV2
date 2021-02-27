import React from "react";
import EmergencyCard from "../components/EmergencyCard";
import Jumbotron from "../components/Jumbotron";
import ContainerChat from "../components/ContainerChat";
import profile from '../images/bgoc.jpeg';
import UsersContainer from '../components/UsersContainer';
import BackpackLink from '../components/BackpackLink';
import './style.css';



const Wolfpack = (props) => {
    
    return (
        <div className="container-fluid">
            <Jumbotron >
                <img className="img-fluid float-center profile-pic" src={profile} alt="profile" id="profile" />
                <h1>Wolfpack Name: Adeventure Time</h1>
                <h2>Alpha: Harry White</h2>
            </Jumbotron>
            <BackpackLink />
                <EmergencyCard emergencyContactObj={{ fName: "Ben", lName: "Smith", pNum: "2145552456" }} />
                <UsersContainer memberObj={{ name: "John Snow"}} />
                <UsersContainer memberObj={{ name: "John Snow"}} />
                <UsersContainer memberObj={{ name: "John Snow"}} />
                <UsersContainer memberObj={{ name: "John Snow"}} />

       <ContainerChat />
    </div>
  );
    }

export default Wolfpack;