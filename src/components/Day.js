import {useState} from 'react'
import {getTimeSlots} from '../api/timeSlotsAPI'
import TimeSlots from './TimeSlots'


const Day = ({dayOfMonth, year, month, firstOfMonthOffset}) => {
    const [timeSlots, setTimeSlots] = useState([])
    const firstDay = dayOfMonth === 1 ? firstOfMonthOffset + 1 : 'unset'
    const dayOfWeek = new Date(month + " "+ dayOfMonth + ", "+year).getDay() + 1
    return (
        <div
            className="calendar-date" 
            style={{gridColumnStart : firstDay}}
            onClick={async () => {
                let slots = await getTimeSlots(dayOfWeek)
                setTimeSlots(slots)
            }}
        >
            {dayOfMonth}
            <TimeSlots  timeSlots={timeSlots}/>
        </div>
    )
}

export default Day
