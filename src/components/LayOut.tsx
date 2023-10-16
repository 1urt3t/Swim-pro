import { NavLink, Outlet } from 'react-router-dom'

export default function LayOut() {
  return (
    <>
    <header className='header'>
        <NavLink to='/Swim-pro' className={({isActive}) => isActive ? 'active-link' : 'link'}>Результаты</NavLink>
    </header>
    <main className='container'>
        <Outlet/>
    </main>
    </>
  )
}
