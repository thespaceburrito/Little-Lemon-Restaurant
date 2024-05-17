import BookingForm from '../components/BookingForm';
import { useNavigate } from 'react-router-dom';
import BookingHero from '../components/BookingHero';
import React, { useReducer, useState } from 'react';

import { fetchAPI, submitAPI } from '../utils/fakeApi';




function BookingPage() {


    const [date, setDate] = useState(new Date())

    function initializeTimes(date) {
      return fetchAPI(date)
      }
      
    function updateTimes(date) {
      const dateObj = new Date(date)
      return fetchAPI(dateObj)
    }
  
    const navigate = useNavigate();
  
    function submitForm(formData) {
      const isSubmitted = submitAPI(formData);
  
      if (isSubmitted) {
        navigate("/confirmed-booking");
      }
    }
    
    function reducer(state, action) {
      let newState
      switch (action.type) {
        case 'UPDATE_TIMES':
        const newDate = new Date(action.payload);
        newState = updateTimes(newDate)
        break;
  
        default:
          throw new Error()
      }
      return newState
    }
  
    const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date))
  
  return (
    <>
      <BookingHero />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
    </>
  );
}

export default BookingPage;
