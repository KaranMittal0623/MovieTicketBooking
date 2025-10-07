import React, { use } from "react";
import Navbar from "./components/Navbar";
import { Route,Routes, useLocation} from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import SeatLayout from "./pages/SeatLayout";
import MyBookings from "./pages/MyBookings";
import Favourite from "./pages/Favourite";
import {Toaster} from 'react-hot-toast';
import Footer from "./components/Footer";
import Layout from "./pages/admin/layout";
import Dashboard from "./pages/admin/dashboard";
import ListShows from "./pages/admin/ListShows";
import AddShows from "./pages/admin/AddShows";
import ListBookings from "./pages/admin/ListBookings";




function App() {
  
  const isAdminRouter = useLocation().pathname.startsWith('/admin');

  return (
   <>
    <Toaster/>
    {!isAdminRouter && <Navbar/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movies/:id' element={<MovieDetails/>}/>
      <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
      <Route path='/my-bookings' element={<MyBookings/>}/>
      <Route path='/favourite' element={<Favourite/>}/>

      <Route path="/admin/*" element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="add-shows" element={<AddShows/>}/>
        <Route path="list-shows" element={<ListShows/>}/>
        <Route path="list-bookings" element={<ListBookings/>}/>
      </Route>
    </Routes>
    {!isAdminRouter && <Footer/>}
   </>
  );
}

export default App;