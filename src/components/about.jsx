import '../App.css';
import behance from '../assets/behance.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import Navbar from './navbar'
import profile from '../assets/profile2.png'

const About = () => {
  return (
    <>
      <div className="flex h-screen w-full bg-white overflow-hidden relative">

        {/* LEFT SECTION */}
        <div className="w-[42%] h-full bg-primary flex flex-col justify-center items-start z-0 select-none">
          <div className="ml-32 flex font-inter flex-col items-center gap-20 text-white font-bold text-6xl tracking-widest opacity-90">

            <div className="flex flex-col items-center gap-2">
              <span>A</span>
              <span>B</span>
              <span>O</span>
              <span>U</span>
              <span>T</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span>M</span>
              <span>E</span>
            </div>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex-1 h-full flex flex-col relative">
          <div className="flex flex-col justify-center h-full pl-32">

            <div>
              <Navbar />
            </div>

            <h1 className="text-7xl font-antonio text-black mb-2 tracking-tight">
              Hello
            </h1>

            <h2 className="text-4xl font-antonio font-medium mt-4 mb-4">
              I am a <span className='text-primary'> Front-end Developer </span>
            </h2>

            <p className="text-gray-800 leading-relaxed mt-4 mb-6 max-w-lg font-inter">
              I’m a 3rd-year Computer Science student and aspiring Software Engineer
              passionate about building impactful digital experiences that balance
              technical precision with user-centered design.
              <br /><br />
              I’ve also explored Digital Forensics and Cloud Fundamentals, broadening
              my understanding of secure, resilient systems.
            </p>

            <div className="flex gap-6 pt-2">
              <button className="font-jura uppercase bg-black text-white px-8 py-2 rounded hover:bg-primary transition-all text-xl tracking-wide">
                Resume
              </button>
              <button className="font-jura uppercase bg-black text-white px-8 py-2 rounded hover:bg-primary transition-all text-xl tracking-wide">
                Contact
              </button>
            </div>

          </div>
        </div>

        {/* MIDDLE CARD */}
        <div className="absolute top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2 w-[320px] bg-surface shadow-2xl z-10 flex flex-col">

          <div className="py-6 flex-1 flex flex-col items-center justify-center text-center">
            <div className="relative w-56 h-56 rounded-full bg-white shadow-sm">
              <img 
                  src={profile} 
                  id="profile" 
                  alt="profile image" 
                  className="absolute -top-6 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full object-cover shadow-md"
              />
            </div>

            <h3 className="text-2xl text-black uppercase tracking-widest leading-snug p-3 font-medium">
              Devaki <br /> Joshi
            </h3>

            <div className="w-16 h-[1px] bg-black mb-3"></div>

            <p className="uppercase tracking-[0.6em] font-jura text-lg text-gray-600">
              Student
            </p>
          </div>

          <div className="w-full bg-white py-4 flex justify-center gap-8">
            <img src={behance} width={28} height="auto" alt="behance" className="cursor-pointer hover:opacity-70 transition-opacity" />
            <img src={github} width={28} height="auto" alt="github" className="cursor-pointer hover:opacity-70 transition-opacity" />
            <img src={linkedin} width={28} height="auto" alt="linkedin" className="cursor-pointer hover:opacity-70 transition-opacity" />
          </div>

        </div>

      </div>
    </>
  );
};

export default About;
