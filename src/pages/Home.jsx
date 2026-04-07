import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeTab, setActiveTab] = useState('react');
  const reactAssignments = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen">
      <div className="w-full px-4 sm:px-8 lg:px-12 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black mb-8 uppercase tracking-tight">
            Assignments Overview
          </h1>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('react')}
              className={`px-8 py-4 font-bold border-2 border-current transition-colors text-lg ${
                activeTab === 'react'
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              React Assignments
            </button>
            <button
              onClick={() => setActiveTab('node')}
              className={`px-8 py-4 font-bold border-2 border-current transition-colors text-lg ${
                activeTab === 'node'
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Node Button
            </button>
          </div>
        </div>

        {activeTab === 'react' && (
          <div className="flex flex-col border-t-2 border-current mt-8">
            {reactAssignments.map((id) => (
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
        )}

        {activeTab === 'node' && (
          <div className="flex flex-col border-t-2 border-current mt-8">
            <div className="p-8 text-center border-b-2 border-current">
              <p className="font-bold text-xl mb-2">Node.js Assignments</p>
              <p className="opacity-70 font-medium">
                Your Node.js assignments will be listed here. Please place your Node code inside the `src/Node` folder.
              </p>
            </div>
            {/* Node assignments can be mapped here similarly later */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
