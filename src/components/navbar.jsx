import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      
      <div className='font-spartan text-white text-3xl p-2 bg-black flex-column'>

        <Link to="/" className="p-4 hover:text-primary">
          Home
        </Link>

        <Link to="/about" className="p-4 hover:text-primary">
          About
        </Link>

        <Link to="/projects" className="p-4 hover:text-primary">
          Projects
        </Link>

        <Link to="/contact" className="p-4 hover:text-primary">
          Contact
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar