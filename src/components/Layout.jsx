import { useState } from 'react'
import { IoMdSettings } from 'react-icons/io'
import { Settings } from './Settings'

const Layout = ({ children, setFocus, focusTime }) => {
  const [isOpen, setIsOpen] = useState(false)
  const test = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer>
        <IoMdSettings className='settings-icon' onClick={test} />
        {isOpen ? <Settings setFocus={setFocus} focusTime={focusTime} /> : null}
      </footer>
    </>
  )
}
export default Layout
