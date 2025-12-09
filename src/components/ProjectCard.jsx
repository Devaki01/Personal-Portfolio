import { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const cardFaceBaseClasses = "absolute inset-0 h-full w-full shadow-xl p-8 flex flex-col items-center justify-center [backface-visibility:hidden]";

  return (
    <div 
      className="group h-[380px] w-[520px] cursor-pointer [perspective:1000px]" 
      onClick={handleFlip}
    >
      <div
        className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >

        <div className={`${cardFaceBaseClasses} bg-primary`}>
          <h3 className="text-white text-3xl font-bold mb-6 text-center tracking-wider drop-shadow-md">
            {project.name}
          </h3>
          
          <div className="bg-white p-3 shadow-inner w-full h-64 flex items-center justify-center overflow-hidden">
             <img 
               src={project.image} 
               alt={project.name} 
               className="w-full h-full object-cover"
             />
          </div>
        </div>

        <div
          className={`${cardFaceBaseClasses} bg-primary [transform:rotateY(180deg)] font-spartan justify-between py-12`}
        >
          <div>
            <h3 className="text-2xl font-xl border-2 p-2 text-white m-4 text-center">{project.name}</h3>
            <p className="text-white text-lg leading-relaxed text-center">
              {project.description}
            </p>
          </div>
          
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} 
            className="mt-6 px-8 py-3 bg-white hover:bg-black hover:text-white transition-colors shadow-md"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;