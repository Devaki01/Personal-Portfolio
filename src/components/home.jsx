import '../App.css';
import Navbar from './navbar';
import logo from '../assets/logo.png';
import profile from '../assets/profile1.jpeg';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className='flex items-center justify-between px-8 py-4'> 
        <div> 
            <img id="logo" src={logo} alt="Logo" className="h-10" /> 
        </div>
        <Navbar />
      </div>

      <div className='flex flex-1'>

        <div className='w-6/12 bg-primary flex items-center justify-center p-12'>
            
            <div className='bg-white shadow-2xl h-[22rem] flex items-center justify-center'>
                <img 
                    src={profile} 
                    id="profile" 
                    alt="profile image" 
                    className="w-screen h-full object-cover" 
                />
            </div> 
        </div>

        <div className='w-6/12 bg-white flex flex-col justify-center pl-12 md:pl-24'>
          <div className='font-antonio uppercase tracking-tighter leading-none'>
            <p className='text-7xl md:text-8xl font-extralight text-black mb-2'>Hello,</p>
            <p className='text-7xl md:text-8xl font-extralight text-black mb-2'>My name is</p>
            <p className='text-7xl md:text-8xl text-primary'>Devaki Joshi</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;


