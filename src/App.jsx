import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Gallery from './pages/Gallery';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    navigate(`/events/${event.id}`);
  };

  const handleBack = () => {
    setSelectedEvent(null);
    navigate('/events');
  };

  return (
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
    </Routes>
  );
}

export default App;

