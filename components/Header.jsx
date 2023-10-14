function Header() {
  return (
    <header className='grid grid-cols-1 md:grid-cols-2'>
        <div className="p-20 md:p-32 flex justify-center items-center ">
          <img src="/profile-pic.png" className='shadow-xl rounded-full' />
        </div>
        <div className="broder py-32 flex justify-center items-center flex-col gap-5">
          <div className=" text-3xl font-bold text-gray-700">Hello I,m</div>
          <div className="text-6xl font-bold text-gray-900">Abdul Baroon</div>
          <div className="text-3xl font-bold text-gray-700">Frontrnd Devloper</div>
          <div className=" flex gap-3">
            <button className="ring-1  rounded-full px-6 border p-3 hover:bg-gray-800 hover:text-white transition ">Download CV</button>
            <button className=" bg-gray-700 text-white hover:bg-gray-900 ring-1  rounded-full px-6 border p-3">Contact Info</button>
          </div>
          <div className=" flex gap-2">
            <img src="/linkedin.png" alt="" className="h-10" />
            <img src="/github.png" alt="" className="h-10" />
          </div>
        </div>
      </header>
  )
}
export default Header;