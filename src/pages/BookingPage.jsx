import React from 'react';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import BookingHero from '../components/BookingHero';

function BookingPage({ availableTimes, dispatch }) {
  return (
    <>
      <BookingHero />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Footer />
    </>
  );
}

export default BookingPage;
