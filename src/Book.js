import { useEffect, useState, useReducer } from "react";
import {seededRandom, fetchAPI, submitAPI} from './booking_api'
import { useNavigate } from "react-router-dom";

function Book () {


    var [timesState, setTimesState] = useState();
    var [selectedTime, setSelectedTime] = useState();
    var [numberofguests, setNumberOfGuests] = useState();
    var [occasion, setOccasion] = useState();
    const navigate = useNavigate();

    const d = new Date();

    function submitReservation () {
        const formData = {
            date: d,
            time: selectedTime,
            numberofguests: numberofguests,
            occasion: occasion
        };
        var confirmMessage = window.confirm("are you sure you would like to book this reservation?");
        if (confirmMessage) {
            if (submitAPI(formData)) {
                navigate("/confirmation");
            }
        }
    }

    useEffect(() => {
        setTimesState(fetchAPI(d))
    }, [])
   
    function displayTimes() {
        if (timesState) {
            return timesState.map((time) => {
                return <option>{time}</option>
            })
        }
    }
    
    return (
        <div class='form'>
            <form onSubmit={submitReservation}>

                <br></br>
                 <label for='date'>Today's date is {JSON.stringify(d)}</label>
                 <p>Choose your time:</p>
                 <select onChange={(e) => {setSelectedTime(e.target.value)}}>
                    {displayTimes()}
                 </select>
                 <br></br>

                <label for='numberofguests'># of Guests</label>
                <input onChange={(e) => {setNumberOfGuests(e.target.value)}}type='number' id='numberofguests' min='1' max='10'></input>

                <br></br>
                <select onChange={(e) => {setOccasion(e.target.value)}} id='occasion'>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <br></br>
                <input  type='submit' value='Submit Reservation'></input>

            </form>

    
        </div>
    )
}

export default Book;