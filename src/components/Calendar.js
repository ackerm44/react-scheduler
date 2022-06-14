import Month from './Month'

const Calendar = () => {
    const year = new Date().getFullYear();
  return (
    <section className="calendar">
        <Month year={year}/>
    </section>
  )
}

export default Calendar