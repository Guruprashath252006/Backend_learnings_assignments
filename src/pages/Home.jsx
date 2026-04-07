import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeTab, setActiveTab] = useState('react');
  const reactAssignments = Array.from({ length: 12 }, (_, i) => i + 1);

  // VS Code protocol link to open the specific directory
  const nodeFolderPath = "vscode://file/C:/FSSLA-BKMERN-GURU/React/Assignments/src/Node";

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-indigo-500/30">
      <div className="w-full max-w-5xl mx-auto px-6 py-20 md:py-32">
        
        {/* Header Section */}
        <div className="mb-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center p-2 mb-8 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl">
            <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 text-slate-900 dark:text-white">
            Workspace
          </h1>
          
          {/* Elegant Segmented Control */}
          <div className="relative inline-flex bg-slate-100 dark:bg-slate-900 p-1 rounded-2xl w-full max-w-sm">
            <button
              onClick={() => setActiveTab('react')}
              className={`flex-1 py-3 px-6 text-sm md:text-base font-semibold rounded-xl transition-all duration-300 ${
                activeTab === 'react'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10'
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              React
            </button>
            <button
              onClick={() => setActiveTab('node')}
              className={`flex-1 py-3 px-6 text-sm md:text-base font-semibold rounded-xl transition-all duration-300 ${
                activeTab === 'node'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10'
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              Node
            </button>
          </div>
        </div>

        {/* Content Render Area */}
        <div className="transition-all duration-500 ease-in-out">
          
          {/* React Tab Content */}
          {activeTab === 'react' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reactAssignments.map((id) => (
                <Link
                  key={id}
                  to={`/assignment/${id}`}
                  className="group flex flex-col justify-between p-6 bg-white dark:bg-[#111111] rounded-2xl shadow-sm ring-1 ring-slate-200/50 dark:ring-white/5 hover:ring-indigo-500/30 dark:hover:ring-indigo-400/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <span className="text-sm font-mono text-slate-400 dark:text-slate-500">
                      #{id.toString().padStart(2, '0')}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-lg text-slate-900 dark:text-slate-100">
                      Assignment {id}
                    </span>
                    <span className="text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors group-hover:translate-x-1 duration-300">
                      &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Node Tab Content */}
          {activeTab === 'node' && (
            <div className="w-full max-w-2xl mx-auto">
              <div className="flex flex-col items-center justify-center p-12 bg-white dark:bg-[#111111] rounded-3xl shadow-sm ring-1 ring-slate-200/50 dark:ring-white/5 text-center">
                
                <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-10 h-10 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Node.js Environment</h2>
                
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-10 max-w-md">
                  Your dedicated Node folder is configured. You can safely build and execute your backend assignments directly from the <code className="font-mono text-sm bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-emerald-600 dark:text-emerald-400">src/Node</code> directory.
                </p>

                {/* Open Folder Button */}
                <a 
                  href={nodeFolderPath}
                  className="group inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 mr-2.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                  </svg>
                  Open in VS Code
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Home;
