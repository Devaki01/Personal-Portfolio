import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  const router = createBrowserRouter ([
      {
        path: '/',
        element: <> <Navbar /> <Home /> </>
      },
      {
        path: '/about',
        element: <> <Navbar /> <About /> </>
      },
      {
        path: '/projects',
        element: <> <Navbar /> <Projects /> </>
      },
      {
        path: '/contact',
        element: <> <Navbar /> <Contact /> </>
      },
    ]) 

  return (
    <>
    <div className='text-4xl font-antonio p-2'> Hello World </div>
    <RouterProvider router={router} />
    </>
  );
}

export default App;


