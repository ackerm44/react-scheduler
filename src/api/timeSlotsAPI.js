// Logic in  here for determining what time slots are available

const fetchTimeRange = async (id) => {
    const result = await fetch(`http://localhost:5000/standardTimeRanges/${id}`)
    const data = await result.json()
    return data
}
  

export const generateTimeSlots = (timeRange) => {
    let a = [];
    for (let i=parseInt(timeRange.timeStart); i<=parseInt(timeRange.timeEnd); i+=100) {
        a.push(i)
    }
    let timeSlots = a.map((value, i, a) => {
        if (a[i+1]) {
          return [value, a[i+1]]
        }
        return []
    })
    timeSlots.pop()
    return timeSlots
}

export const getTimeSlots = async (id) => {
    let timeRange = await fetchTimeRange(id)
    return generateTimeSlots(timeRange)
}