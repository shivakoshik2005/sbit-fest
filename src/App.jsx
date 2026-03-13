import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Gallery from './pages/Gallery';
import Badminton from './pages/Badminton';
import SplashScreen from './components/SplashScreen';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate();

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    navigate(`/events/${event.id}`);
  };

  const handleBack = () => {
    setSelectedEvent(null);
    navigate('/events');
  };

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/events" 
          element={<Events onEventClick={handleEventClick} />} 
        />
        <Route 
          path="/events/:id" 
          element={<EventDetails event={selectedEvent} />} 
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/badminton" element={<Badminton />} />
      </Routes>
    </>
  );
}

export default App;

