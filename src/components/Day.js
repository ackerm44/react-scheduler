// import {useState} from 'react'
import {getTimeSlots} from '../api/timeSlotsAPI'

const Day = ({dayOfMonth, year, month, firstOfMonthOffset, setTimeSlots, setSelectedDate}) => {
    // const [timeSlots, setTimeSlots] = useState([])
    const firstDay = dayOfMonth === 1 ? firstOfMonthOffset + 1 : 'unset'
    const dayOfWeek = new Date(month + " "+ dayOfMonth + ", "+year).getDay() + 1
    setSelectedDate(`${year}-${month}-${dayOfMonth}`)

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
            </div>
        
    )
}

export default Day
