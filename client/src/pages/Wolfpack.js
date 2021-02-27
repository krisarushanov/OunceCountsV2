import React from "react";
import EmergencyCard from "../components/EmergencyCard";
import Jumbotron from "../components/Jumbotron";
<<<<<<< HEAD
import {SocketContext, socket} from 'context/socket';
import Child from 'components/Child';
=======
import ContainerChat from "../components/ContainerChat";
import profile from '../images/bgoc.jpeg';
import UsersContainer from '../components/UsersContainer';
import BackpackLink from '../components/BackpackLink';
import './style.css';


>>>>>>> 1a88014c06d51bb68db03d49881b7731c2ecdcb6

const Wolfpack = (props) => {
    
    return (
        <div className="container-fluid">
            <Jumbotron >
                <img className="img-fluid float-center profile-pic" src={profile} alt="profile" id="profile" />
                <h1>Wolfpack Name: Adventure Time</h1>
                <h2>Alpha: Harry White</h2>
            </Jumbotron>
<<<<<<< HEAD
            <SocketContext.Provider value={socket}>
      <Child />
      <Child />
      ...
    </ SocketContext.Provider>

=======
            <BackpackLink />
                <EmergencyCard emergencyContactObj={{ fName: "Ben", lName: "Smith", pNum: "2145552456" }} />
                <UsersContainer memberObj={{ name: "John Snow"}} />
                <UsersContainer memberObj={{ name: "John Snow"}} />
                <UsersContainer memberObj={{ name: "John Snow"}} />
                <UsersContainer memberObj={{ name: "John Snow"}} />
>>>>>>> 1a88014c06d51bb68db03d49881b7731c2ecdcb6

       <ContainerChat />
    </div>
  );
    }

export default Wolfpack;