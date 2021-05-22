import React, { useState } from 'react';
import {Link, navigate} from '@reach/router';
import Form from '../components/Form';
import axios from 'axios';

const AddPirate = props =>{
    const [form, setForm] = useState({
        name:"",
        url: "",
        numberOfChests: "",
        catchPhrase: "",
        crewPosition: "",
        pegLeg: false,
        eyePatch: false,
        hookHand: false
    })
    const checkedHandler = e =>{
        setForm({...form, [e.target.name]: e.target.checked});
    }
    const [error, setError] = useState({});
    const onChangeHandler = e =>{
        setForm({...form, [e.target.name]: e.target.value})
    }
    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/pirate/new", form)
        .then(res => {
            if(res.data.error){
                setError(res.data.error.errors)
            }else{
                navigate("/")
            }
        })
        .catch(err=> console.log("Something went wrong adding the pirate.", err))
    }
    return(
        <>
        <h1 className="jumbotron">Add a Pirate</h1>
        <Link to="/" className="text-black">Crew Board</Link>
        <Form onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} checkedHandler={checkedHandler} formData={form} error={error}/>
        </>
    )
}
export default AddPirate;
