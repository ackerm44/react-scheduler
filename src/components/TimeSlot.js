import { useState } from 'react'


const TimeSlot = ({ slot }) => {
    // const [toggleOpen, setToggleOpen] = useState(false)

    const toggleForm = (e) => {
        e.target.nextSibling.classList.toggle('visible-flex')
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="timeSlot" >
            <div className="timeSlot-title" onClick={(e) => toggleForm(e)}>{slot[0]} - {slot[1]}</div>
            <form onSubmit={onSubmit}>
                <label>Name: </label>
                <input type="text"></input>
                <label>Phone: </label>
                <input type="tel"></input>
                <label>Email: </label>
                <input type="email"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default TimeSlot