export const Settings = ({ setFocus, focusTime }) => {
  const timeInMinutes = focusTime / 60
  const test = (userTimeInMinutes) => {
    console.log('clicked')
    const timeInSeconds = userTimeInMinutes * 60
    localStorage.setItem('focus', timeInSeconds)

    setFocus(timeInSeconds)
  }

  return (
    <div>
      <form onSubmit={test}>
        <input value={timeInMinutes} onChange={() => console.log('blue')} />
        <button>update focus timer</button>
      </form>
    </div>
  )
}
