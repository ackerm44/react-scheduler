import {useState} from 'react'
import FormatTime from './FormatTime'
import {scheduleAppointment} from '../api/schedulerAPI'

const TimeSlot = ({ slot, selectedDate }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const toggleForm = (e) => {
        e.target.nextSibling.classList.toggle('visible-flex')
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let timeSlot = `${selectedDate}T${<FormatTime time={slot[0]} />}`
        scheduleAppointment({name, phone, email, timeSlot})
    }

    return (
        <div className="timeSlot" >
            <div className="timeSlot-title" onClick={(e) => toggleForm(e)}>
                <FormatTime time={slot[0]} /> - <FormatTime time={slot[1]} />
            </div>
            <form onSubmit={onSubmit}>
                <label>Name: </label>
                <input type="text" onChange={(e) => setName(e.target.value)}></input>
                <label>Phone: </label>
                <input type="tel" onChange={(e) => setPhone(e.target.value)}></input>
                <label>Email: </label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default TimeSlot