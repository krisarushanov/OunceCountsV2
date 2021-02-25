/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Alphapack () {
    return (
        <div>
            <div className="container">
                <main className="row">
                    
                    <hr />
                    <div className="container" id="members">
                        <h1 className="title" id="title" text-align="center">Alphapack Backpack</h1>
                        </div>
                        <h3>Pack Members</h3>
                    <div className="container">
                        <div className="container">
                            <div className="card" id="packmember">
                            </div>
                        </div>
                        <div className="input-group mb-3" id="search">
                            <input type="text" className="form-control" placeholder="Pack Member's Email" aria-label="Pack Member's Email"
                            aria-describedby="basic-addon2"></input>
                            <div className="input-grou-append">
                                <button className="btn btn-outline-secondary" type="button">ADD A WOLF</button>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <p>another one</p>
                        <p>form for list</p>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Alphapack;