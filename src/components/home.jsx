import '../App.css';
import Navbar from './navbar';
import logo from '../assets/logo.png';

const Home = () => {
  return (
    <>
      <div className='flex items-center justify-between bg-black'> 
        <div className='p-4'> <img src={logo} /> </div>
        <Navbar />
      </div>
      <h1> Home Page</h1>
    </>
  );
};

export default Home;


