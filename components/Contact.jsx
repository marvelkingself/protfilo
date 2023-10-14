function Contact() {
  return (
    <div className="about p-5 md:p-12 text-center">
        <div className="text-gray-500 text-lg">To</div>
        <div className="text-gray-900 text-5xl font-bold">Contact</div>
        <div className="flex justify-center items-center p-10">
        <div className="ring-1 rounded-3xl p-10 flex flex-col md:flex-row gap-5 bg-gray-200">
          <div className="flex  justify-center items-center text-center">
            <img src="/email.png" alt="" className="h-5 md:h-10" />
            <div className="hover:text-red-700 cursor-pointer text-md md:text-3xl text-semi-bold"> Barunkhan1234@gmail.com</div>
          </div>
          <div className="flex justify-center  items-center text-center ">
            <img src="/linkedin.png" alt="" className="h-5 md:h-10" />
            <div className="hover:text-red-700 cursor-pointer  text-md md:text-3xl text-semi-bold">https://www.linkedin.com/in/abdulbaroon</div>
          </div>
          </div>
        </div>
        <div className=" text-xl text-gray-600 p-10  ">Copyright @ 2023 Abdul Baroon. All Right Reserved</div>
      </div>
  )
}
export default Contact;