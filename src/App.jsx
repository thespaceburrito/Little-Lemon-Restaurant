
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
import ConfirmedBooking from './pages/ConfirmedBooking';
import Construction from './pages/Construction';


//router and routes
const App = () => {
  

  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path='/booking' element={<BookingPage  />} />
        <Route path='/confirmed-booking' element={<ConfirmedBooking  />} />
        <Route path='/construction' element={<Construction  />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );

};



export default App;
