import {useState} from 'react'
import TimeSlot from './TimeSlot'

const TimeSlots = ({timeSlots}) => {
    const display = timeSlots ? 

    <section className="timeSlots">
        <div className="timeSlots-wrapper">
            {timeSlots.map((slot, i) => <TimeSlot key={i} slot={slot}/>)}
        </div>
    </section>

    : 
    ''
  return (
    display
  )
}

export default TimeSlots