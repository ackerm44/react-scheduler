import Day from './Day'

const Month = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August']
    const currentMonth = new Date().getMonth()
    const totalDaysInMonth = (y, m) => new Date(y, m, 0).getDate()


    return (
        <div>
            <h3>{months[currentMonth]}</h3>
            {
                [...Array(totalDaysInMonth(2022, currentMonth +1))].map((x, i) =>
                    <Day key={i + 1} date={i + 1}/>
                  )
            }
            <Day />
        </div>
    )
}





export default Month