import Header from './components/Header.js'
import Calendar from './components/Calendar.js'
import TimeSlots from './components/TimeSlots.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="calendar-timeslot-wrapper">
        <Calendar />
        <TimeSlots />
      </section>
    </div>
  );
}

export default App;
