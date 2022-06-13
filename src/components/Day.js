
const Day = ({key, date, firstOfMonth}) => {
    console.log(firstOfMonth)
    const firstDay = date == 0 ? firstOfMonth + 1 : 'unset'
    return (
        <div className="calendar-date" style={{gridColumnStart : firstDay}}>{date + 1}</div>
    )
}

export default Day
