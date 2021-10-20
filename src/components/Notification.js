const Notification = ({ message, isError }) => {

  console.log('Is Error?:', isError)
  if (message === null) {
    return null
  } else {
    const alertToShow = isError 
      ? <div className='error'>{message}</div>
      : <div className='notification'>{message}</div>
      
    return alertToShow
  }
}

export default Notification