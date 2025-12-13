import {useState} from 'react';
import {Link} from 'react-router-dom';
import Hamburger from 'hamburger-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="relative w-full z-50">
      
      <div className="fixed top-5 right-8 z-50">
        <Hamburger 
          toggled={open} 
          toggle={setOpen} 
          size={32}
          color={open ? '#4F46E5' : '#000000ff'} 
          duration={0.4}
        />
      </div>

      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-1/2 bg-indigo-100 shadow-xl transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col justify-center items-center`}
      >

        <div className="flex flex-col space-y-12 text-center font-bold text-3xl md:text-6xl text-indigo-600 font-spartan">
          
          <Link 
            to="/" 
            onClick={handleLinkClick}
            className="hover:text-indigo-800 transition-colors duration-200"
          >
            Home
          </Link>

          <Link 
            to="/about" 
            onClick={handleLinkClick}
            className="hover:text-indigo-800 transition-colors duration-200"
          >
            About Me
          </Link>

          <Link 
            to="/projects" 
            onClick={handleLinkClick}
            className="hover:text-indigo-800 transition-colors duration-200"
          >
            Projects
          </Link>

          <Link 
            to="/contact" 
            onClick={handleLinkClick}
            className="hover:text-indigo-800 transition-colors duration-200"
          >
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;