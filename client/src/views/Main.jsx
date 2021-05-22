import React, {useState, useEffect} from 'react';
import Card from '../components/Card';
import axios from 'axios';
import {Link} from '@reach/router';


const Main = props =>{
    const [allPirates, setAllPirates] = useState(null)
    const [update, setUpdate] = useState(false);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirate")
            .then(res => setAllPirates(res.data.Pirate))
    }, [update])
    const removePirate = id =>{
        axios.delete(`http://localhost:8000/api/pirate/delete/${id}`)
        .then(setUpdate(!update))
        .catch(err=> console.log("Something went wrong when deleting from main page."))
    }
    return(
        <>
            <h1 className="jumbotron">Ahoy Matey! Here are all yer pirates!</h1>
            <p><Link to="/pirate/new" className="text-black">Add Pirate</Link></p>
            {
                allPirates ? allPirates.map((item, i) =>{
                   return <Card pirate={item} key={i} removePirate={removePirate}/>
                }): ""
            }
        </>
    );
}
export default Main;