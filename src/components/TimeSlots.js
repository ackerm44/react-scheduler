import TimeSlot from './TimeSlot'

const TimeSlots = ({selectedDate, timeSlots}) => {
    const display = timeSlots.length ? 
      <section className="timeSlots">
          <div className="timeSlots-wrapper">
              {timeSlots.map((slot, i) => <TimeSlot key={i} slot={slot} selectedDate={selectedDate}/>)}
          </div>
      </section>
      : 
      <section className="timeSlots">
          <div className="timeSlots-wrapper">
              <p>There are no available appointments on this day.</p>
          </div>
      </section>
  return (
    display
  )
}

export default TimeSlots