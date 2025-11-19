import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      
      <div className='font-spartan text-2xl font-bold'>

        <Link to="/" className="hover:text-primary">
          Home
        </Link>

        <Link to="/about" className="hover:text-primary">
          About
        </Link>

        <Link to="/projects" className="hover:text-primary">
          Projects
        </Link>

        <Link to="/contact" className="hover:text-primary">
          Contact
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar