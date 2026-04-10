import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeTab, setActiveTab] = useState('react');
  const reactAssignments = Array.from({ length: 12 }, (_, i) => i + 1);

  // GitHub repository link to the Node directory
  const nodeFolderPath = "https://github.com/Guruprashath252006/Backend_learnings_assignments/tree/main/src/Node";

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
            <div className="w-full max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="relative group rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-emerald-500/20 dark:hover:shadow-emerald-900/40 ring-1 ring-slate-200/50 dark:ring-white/5">
                {/* Background ambient gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/10 opacity-70"></div>
                
                <div className="relative flex flex-col md:flex-row items-center p-8 md:p-12 bg-white/60 dark:bg-[#111111]/80 backdrop-blur-xl text-center md:text-left gap-8 md:gap-10">
                  
                  {/* Left Icon Area */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-emerald-400 dark:bg-emerald-500 blur-2xl opacity-40 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="relative w-28 h-28 bg-gradient-to-tr from-emerald-50 to-teal-100 dark:from-emerald-500/10 dark:to-teal-500/10 rounded-2xl flex items-center justify-center ring-1 ring-emerald-200 dark:ring-emerald-500/30 shadow-inner">
                      <svg className="w-14 h-14 text-emerald-600 dark:text-emerald-400 drop-shadow-md transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Right Content Area */}
                  <div className="flex-1 flex flex-col items-center md:items-start">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-bold tracking-wider uppercase mb-4 ring-1 ring-emerald-200/50 dark:ring-emerald-500/30 shadow-sm">
                      Backend Environment
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                      Node.js <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Workspace</span>
                    </h2>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8 max-w-md">
                      Your dedicated backend folder is pre-configured. Dive into server-side programming and build your APIs directly from the <code className="font-mono text-sm font-semibold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-md text-emerald-700 dark:text-emerald-400">src/Node</code> directory.
                    </p>

                    {/* Open GitHub Button */}
                    <a 
                      href={nodeFolderPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-emerald-600 dark:to-teal-500 rounded-xl hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:-translate-y-1 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                      <svg className="w-5 h-5 mr-3 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span className="relative z-10">Open in GitHub</span>
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Home;
