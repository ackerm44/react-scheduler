
export const scheduleAppointment = async (appointment) => {
    await fetch('http://localhost:5000/appointments', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(appointment),
    })
    console.log(appointment)

}