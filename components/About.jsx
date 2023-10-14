function About() {
  return (
    <div className="about p-20 md:p-12 text-center" id="about">
        <div className="text-gray-500 text-lg">Get to know</div>
        <div className="text-gray-900 text-5xl font-bold"> About Me</div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center md:gap-10 gap-5 py-10">
          <img src="/about-pic.png" className='md:h-[400px] rounded-3xl ' />
          <div className="broder py-10 flex flex-col md:gap-10 gap-5  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="ring-1 rounded-lg p-10 flex flex-col justify-center items-center gap-3">
                <img src="/education.png" alt="" className=" h-20" />
                <div className="text-3xl font-bold text-gray-900">Education</div>
                <div className="text-xl font-semibold text-gray-700">4 Year</div>
                <div className="text-md font-semibold text-gray-700">B.Tech(IT)</div>
              </div>
              <div className="ring-1 rounded-lg p-10 flex flex-col justify-center items-center gap-3">
                <img src="/experience.png" alt="" className="h-20" />
                <div className="text-3xl font-bold text-gray-900">Experience</div>
                <div className="text-xl font-semibold text-gray-700">Fresher</div>
                <div className="text-md font-semibold text-gray-700">Fonted Devlopment</div>
              </div>
            </div>
            <div className="text text-start text-2xl transition  text-gray-600">
            Software Engineer Intern dedicated to improving skills through hands-on learning and development work. Proficient in mobile and desktop
development environments. Adept at using HTML5, JavaScript, and other programming languages to produce clean code. Well-organized and
collaborative team player with strong communication and analytical abilities
            </div>

          </div>
        </div>
      </div>
  )
}
export default About;