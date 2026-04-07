import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Dashboard = lazy(() => import('../pages/Dashboard'));

// Assignments
const Assignment1 = lazy(() => import('../assignments/Assignment1'));
const Assignment2 = lazy(() => import('../assignments/Assignment2'));
const Assignment3 = lazy(() => import('../assignments/Assignment3'));
const Assignment4 = lazy(() => import('../assignments/Assignment4'));
const Assignment5 = lazy(() => import('../assignments/Assignment5'));
const Assignment6 = lazy(() => import('../assignments/Assignment6'));
const Assignment7 = lazy(() => import('../assignments/Assignment7'));
const Assignment8 = lazy(() => import('../assignments/Assignment8'));
const Assignment9 = lazy(() => import('../assignments/Assignment9'));
const Assignment10 = lazy(() => import('../assignments/Assignment10'));
const Assignment11 = lazy(() => import('../assignments/Assignment11'));
const Assignment12 = lazy(() => import('../assignments/Assignment12'));


const AppRoutes = () => {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 bg-slate-200 rounded-full mb-4"></div>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Loading Resources...</p>
        </div>
      </div>
    }>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assignment">
          <Route path="/assignment/1" element={<Assignment1 />} />
          <Route path="/assignment/2" element={<Assignment2 />} />
          <Route path="/assignment/3" element={<Assignment3 />} />
          <Route path="/assignment/4" element={<Assignment4 />} />
          <Route path="/assignment/5" element={<Assignment5 />} />
          <Route path="/assignment/6" element={<Assignment6 />} />
          <Route path="/assignment/7" element={<Assignment7 />} />
          <Route path="/assignment/8" element={<Assignment8 />} />
          <Route path="/assignment/9" element={<Assignment9 />} />
          <Route path="/assignment/10" element={<Assignment10 />} />
          <Route path="/assignment/11" element={<Assignment11 />} />
          <Route path="/assignment/12" element={<Assignment12 />} />

        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
