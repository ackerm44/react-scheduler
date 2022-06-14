import {useState} from 'react'


const TimeSlot = ({slot}) => {
   const [toggleOpen, setToggleOpen] = useState(false)

   const toggleForm = () => {
       setToggleOpen(toggleOpen ? false : true)
       console.log(toggleOpen)
   }

  return (
    <div className="timeSlot" onClick={() => toggleForm()}>
        <p>{slot[0]} - {slot[1]}</p>
        <form>
            <label>Name: </label>
            <input type="text"></input>
            <label>Phone: </label>
            <input type="tel"></input>
            <label>Email: </label>
            <input type="email"></input>
        </form>
    </div>
  )
}

export default TimeSlot