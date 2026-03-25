import React from 'react';
import { useNavigate } from 'react-router-dom';

const AssignmentLayout = ({ title, id, children }) => {
  const navigate = useNavigate();

  const handlePrevious = () => {
    if (id > 1) navigate(`/assignment/${id - 1}`);
  };

  const handleNext = () => {
    if (id < 50) navigate(`/assignment/${id + 1}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
      <div className="flex justify-between items-center mb-10 pb-6 border-b-2 border-current">
        <button 
          onClick={handlePrevious} 
          disabled={id === 1}
          className="font-bold hover:underline disabled:opacity-30 disabled:no-underline disabled:cursor-not-allowed uppercase text-sm"
        >
          &larr; Prev
        </button>
        <h1 className="text-2xl font-black uppercase tracking-tight">
          {title}
        </h1>
        <button 
          onClick={handleNext} 
          disabled={id === 50}
          className="font-bold hover:underline disabled:opacity-30 disabled:no-underline disabled:cursor-not-allowed uppercase text-sm"
        >
          Next &rarr;
        </button>
      </div>
      
      <div className="min-h-[50vh]">
        {children}
      </div>
    </div>
  );
};

export default AssignmentLayout;
