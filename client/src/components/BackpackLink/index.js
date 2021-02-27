import React from 'react';
import { Link } from 'react-router-dom';


const BackpackLink = () => {
    return (
        <div className="container-sm">
            <div className="card float-center">
            <Link to="/backpack">
                <h1 className="float-center text-info">Lets Check Out Your Backpack</h1>
            </Link>
            </div>
        </div>
    )
}

export default BackpackLink;