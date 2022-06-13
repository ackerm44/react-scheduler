import Day from './Day'
import DayHeader from './DayHeader'

const Month = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August']
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const currentMonth = new Date().getMonth()
    const totalDaysInMonth = (y, m) => new Date(y, m, 0).getDate()
    const firstOfMonth = new Date(months[currentMonth]+ "1, 2022").getDay()
    console.log(firstOfMonth)
    return (
        <div>
            <h3>{months[currentMonth]}</h3>
            <div className="day-header-wrapper">
                {days.map((day, i) => <DayHeader key={i} day={day} />)}
            </div>
            <div className="dates-wrapper">
                {
                    [...Array(totalDaysInMonth(2022, currentMonth +1))].map((x, i) =>
                        <Day key={i} date={i} firstOfMonth={firstOfMonth}/>
                    )
                }
            </div>
        </div>
    )
}





export default Month