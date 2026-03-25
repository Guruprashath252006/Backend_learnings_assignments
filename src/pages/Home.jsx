import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const assignments = Array.from({ length: 50 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen">
      <div className="w-full px-4 sm:px-8 lg:px-12 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-black mb-2 uppercase tracking-tight">
            Assignments
          </h1>
          <p className="opacity-70 font-medium">
            React Assignment Index
          </p>
        </div>

        <div className="flex flex-col border-t-2 border-current">
          {assignments.map((id) => (
            <Link
              key={id}
              to={`/assignment/${id}`}
              className="group flex justify-between items-center p-5 border-b-2 border-current hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
            >
              <span className="font-bold text-lg">Assignment {id}</span>
              <span className="font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
