import {useState} from 'react'

import Month from './Month'
import TimeSlots from './TimeSlots'

const Calendar = () => {
  const [timeSlots, setTimeSlots] = useState([])
  const [selectedDate, setSelectedDate] = useState('')

  const year = new Date().getFullYear();

  return (
    <section className="calendar-timeSlot-wrapper">
      <section className="calendar">
          <Month year={year} setTimeSlots={setTimeSlots} setSelectedDate={setSelectedDate}/>
      </section>
      <TimeSlots setTimeSlots={setTimeSlots} selectedDate={selectedDate} timeSlots={timeSlots}/>
    </section>
    
  )
}

export default Calendar