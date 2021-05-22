import React from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const Card = props =>{
    const cardStyle = {
        width: "22rem",
        display: "inline-block",
        margin: "10px"
    }
    const removePirate = e =>{
        axios.delete(`http://localhost:8000/api/pirate/delete/${props.id}`)
        .then(navigate("/"))
    }
    return(
        <div className="card" style={cardStyle}>
            <img className="card-img-top" src={props.pirate.url} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.pirate.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><Link to={`/pirate/${props.pirate._id}`}>View Pirate</Link></li>
            </ul>
            <div className="card-body">
                <button className="btn btn-danger" onClick={() => props.removePirate(props.pirate._id)}>Walk the Plank</button>
            </div>
        </div>
    );    
}

export default Card;