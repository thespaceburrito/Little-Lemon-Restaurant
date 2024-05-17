import React, { useReducer } from 'react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

//layouts and pages
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import BookingPage from './pages/BookingPage'

export const initialAvailableTimes = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

export const initializeTimes = () => {
  return initialAvailableTimes;
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return the same times regardless of the date
      return initialAvailableTimes;
    default:
      return state;
  }
};

//router and routes
const App = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path='/booking' element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );

};



export default App;
