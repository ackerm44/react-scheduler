import Day from './Day'
import DayHeader from './DayHeader'

const Month = ({year}) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August']
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const currentMonth = new Date().getMonth()
    const totalDaysInMonth = (y, m) => new Date(y, m, 0).getDate()
    const firstOfMonthOffset = new Date(months[currentMonth]+ "1, "+year).getDay()
    return (
        <div>
            <h3>{months[currentMonth]}</h3>
            <div className="day-header-wrapper">
                {days.map((day, i) => <DayHeader key={i} day={day} />)}
            </div>
            <div className="dates-wrapper">
                {
                    [...Array(totalDaysInMonth(year, currentMonth +1))].map((x, i) =>
                        <Day key={i+1} dayOfMonth={i+1} year={year} month={currentMonth + 1} firstOfMonthOffset={firstOfMonthOffset}/>
                    )
                }
            </div>
        </div>
    )
}





export default Month