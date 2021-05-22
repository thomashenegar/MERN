import React, {useState} from 'react';

const Form = props =>{
    // const [form, setForm] = useState({
    //     name: "",
    //     url: "",
    //     numberofChests: "",
    //     catchPhrase: "",
    //     crewPosition: "",
    //     pegLeg: false,
    //     eyePatch: false,
    //     hookHand: false
    // })
    // const checkedHandler = e =>{
    //     setForm({...form, [e.target.name]: e.target.checked});
    // }
    return(
        <form onSubmit={props.onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="form-control" onChange={props.onChangeHandler} value={props.formData.name}/>
                    {
                        props.error.name ? <span className="text-danger">{props.error.name.message}</span> : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="url">Link to Picture</label>
                    <input type="text" name="url" className="form-control"  onChange={props.onChangeHandler} value={props.formData.url}/>
                    {
                        props.error.url ? <span className="text-danger">{props.error.url.message}</span> : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="numberofChests">Number of Treasure Chests</label>
                    <input type="number" name="numberOfChests" className="form-control"  onChange={props.onChangeHandler} value={props.formData.numberOfChests}/>
                    {
                        props.error.numberOfChests ? <span className="text-danger">{props.error.numberOfChests.message}</span> : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="catchPhrase">Pirate Catch Phrase</label>
                    <input type="text" name="catchPhrase" className="form-control"  onChange={props.onChangeHandler} value={props.formData.catchPhrase}/>
                    {
                        props.error.catchPhrase ? <span className="text-danger">{props.error.catchPhrase.message}</span> : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="crewPosition">Crew Position</label>
                    <select name="crewPosition" className="form-control"  onChange={props.onChangeHandler} value={props.formData.crewPosition}>
                        <option value="firstMate">First Mate</option>
                        <option value="quarterMaster">Quarter Master</option>
                        <option value="boatswain">Boatswain</option>
                        <option value="powderMonkey">Powder Monkey</option>
                    </select>
                        {
                        props.error.crewPosition ? <span className="text-danger">{props.error.crewPosition.message}</span> : ""
                        }
                </div>
                <div className="form-group">
                    <input type="checkbox" name="pegLeg" className="form=control" checked={props.formData.pegLeg} onChange={props.checkedHandler} />
                    <label htmlFor="pegLeg">Peg Leg</label>
                </div>
                <div className="form-group">
                    <input type="checkbox" name="eyePatch" className="form=control" checked={props.formData.eyePatch} onChange={props.checkedHandler}/>
                    <label htmlFor="eyePatch">Eye Patch</label>
                </div>
                <div className="form-group">
                    <input type="checkbox" name="hookHand" className="form=control" checked={props.formData.hookHand} onChange={props.checkedHandler}/>
                    <label htmlFor="hookHand">Hook Hand</label>
                </div>
        <input type="submit" value="Add Pirate" className="btn btn-primary"/>
        </form>
    );
}
export default Form;