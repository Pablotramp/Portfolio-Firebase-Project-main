import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export function MainTemplate() {
  return (<>
    <header className='bg-black text-white '>
      <h1 className='text-xl'>portfolio pablo</h1>
      <Navbar />
    </header>
    <main>
      <Outlet />
    </main>
  </>)
}

export default MainTemplate