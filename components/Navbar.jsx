import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" p-5 md:p-10 flex justify-between items-center">
      <h1 className=' text-xl lg:text-5xl font-bold'>Abdul Baroon</h1>
      <ul className='lg:flex hidden  gap-20 '>
        <li  className='text-sm lg:text-2xl transition hover:text-red-700 cursor-pointer '><Link to="/EXPERIENCES"> HOME </Link> </li>
        <li href="" className='text-sm lg:text-2xl transition hover:text-red-700 cursor-pointer '><Link to="https://github.com/">EXPERIENCES</Link> </li>
        <li href="" className='text-sm lg:text-2xl transition hover:text-red-700 cursor-pointer '>PROJECTS</li>
        <li href="" className='text-sm lg:text-2xl transition hover:text-red-700 cursor-pointer '>CONTACT</li>
      </ul>
      <button className="block md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        </button>
    </nav>
  )
}
export default Navbar;