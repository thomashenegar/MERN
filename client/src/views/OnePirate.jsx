import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Link, navigate} from '@reach/router';

const OnePirate = props =>{
    const [onePirate, setOnePirate] = useState({});
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/pirate/${props.id}`)
        .then(res => setOnePirate(res.data.Pirate))
        .catch(err=> console.log(err))
    }, [])
    return(
        <>
        <h1 className="jumbotron">{onePirate.name}</h1>
        <Link to="/" className="text-black">Crew Board</Link>
        <div   className="row">
            <img src className="col" src={onePirate.url} alt={onePirate.name}/>
                <div className="col">
                    <h1>"{onePirate.catchPhrase}"</h1>
                </div>
            <div className="col">
                <h2>About</h2>
                <h3>Position: {onePirate.crewPosition}</h3>
                <h3>Treasures: {onePirate.numberOfChests}</h3>
                {onePirate.hookHand ? <h3>Hook Hand: yes</h3> : <h3>Hook Hand: no</h3>}
                {onePirate.pegLeg ? <h3>Peg Leg: yes</h3> : <h3>Peg Leg: no</h3>}
                {onePirate.eyePatch ? <h3>Eye Patch: yes</h3> : <h3>Eye Patch: no</h3>}
                
            </div>
        </div>
        </>
    )
}
export default OnePirate;