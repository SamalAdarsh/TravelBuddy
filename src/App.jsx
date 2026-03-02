import React from "react";
import Header from "./components/shared/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateTrip from "./pages/CreateTrip";
import { Toaster } from "./components/ui/sonner";
import TripDetails from "./pages/TripDetails";

const App = () => {
  return (
    <>
     <Toaster/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-trip" element={<CreateTrip />} />
          <Route path="/trips/:tripId" element={<TripDetails />} />
      </Routes>
    </>
  );
};

export default App;
