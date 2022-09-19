import React from 'react';
import AllCalendar from './calendar/AllCalendar';
import Navigation from './navbar/components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <AllCalendar />
    </div>
  );
}

export default App;
