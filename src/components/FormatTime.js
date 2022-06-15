
const FormatTime = ({time}) => {
    let formattedTime = 0;
    let twelveHourTime = time % 1200 !== 0 ? (time % 1200).toString() : time.toString()
      twelveHourTime = twelveHourTime.slice(0,-2) + ':' + twelveHourTime.slice(-2);
      formattedTime = time < 1200 ? twelveHourTime + ' am' :  twelveHourTime + ' pm'
      
      return (
          formattedTime
      )
  }

export default FormatTime