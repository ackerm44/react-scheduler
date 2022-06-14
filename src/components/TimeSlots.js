import {useState} from 'react'
import TimeSlot from './TimeSlot'

const TimeSlots = () => {
    // const [timeSlots, setTimeSlots] = useState([])

    const timeSlots= [
        [900,1000],
        [1000,1100],
        [1100,1200]
    ]
  return (
    <section className="timeSlots">
        <div className="timeSlots-wrapper">
            {timeSlots.map((slot, i) => <TimeSlot key={i} slot={slot}/>)}
        </div>
    </section>

  )
}

export default TimeSlots