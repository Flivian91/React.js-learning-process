import { useState } from "react";

function Lists(){
    const [details, setDetails] = useState({year:2023,Name:"",Gender: ""});

    function showYear(event){
            setDetails(d => ({...d, year: event.target.value}));
    }

    function showName(event){
        setDetails(d => ({...d, Name: event.target.value}));
    }

function showGender(event){
    setDetails(d => ({...d, Gender: event.target.value}));
    }


    return(
        <div>
            <h1>Details</h1>
            Year: {details.year}<br/>
            Name: {details.Name}<br/>
            Gender: {details.Gender}<br/>

            Enter year: <input type="number" onChange={showYear}/> <br/>
            Enter name: <input type="text" onChange={showName}/> <br/>
            Enter gender:
                          <input type="radio" value="Male" checked={details.Gender === "Male"} onChange={showGender}/> Male<br/>
                          <input type="radio" value="female"  checked={details.Gender === "female"} onChange={showGender}/> Female <br/>
        </div>
    );
}

export default Lists;