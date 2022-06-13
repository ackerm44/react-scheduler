
const Day = ({i, date, firstOfMonth}) => {
    const firstDay = date == 0 ? firstOfMonth + 1 : 'unset'
    const actualDate = date + 1
    return (
        <div
            className="calendar-date" 
            style={{gridColumnStart : firstDay}}
            onClick={(e) => {console.log(actualDate)}}
        >
            {actualDate}
        </div>
    )
}

export default Day
