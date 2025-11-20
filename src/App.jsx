import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  const router = createBrowserRouter ([
      {
        path: '/',
        element: <Home /> 
      },
      {
        path: '/about',
        element: <About /> 
      },
      {
        path: '/projects',
        element: <Projects /> 
      },
      {
        path: '/contact',
        element: <Contact /> 
      },
    ]) 

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;


