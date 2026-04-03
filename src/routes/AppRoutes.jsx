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
const Assignment13 = lazy(() => import('../assignments/Assignment13'));
const Assignment14 = lazy(() => import('../assignments/Assignment14'));
const Assignment15 = lazy(() => import('../assignments/Assignment15'));
const Assignment16 = lazy(() => import('../assignments/Assignment16'));
const Assignment17 = lazy(() => import('../assignments/Assignment17'));
const Assignment18 = lazy(() => import('../assignments/Assignment18'));
const Assignment19 = lazy(() => import('../assignments/Assignment19'));
const Assignment20 = lazy(() => import('../assignments/Assignment20'));
const Assignment21 = lazy(() => import('../assignments/Assignment21'));
const Assignment22 = lazy(() => import('../assignments/Assignment22'));
const Assignment23 = lazy(() => import('../assignments/Assignment23'));
const Assignment24 = lazy(() => import('../assignments/Assignment24'));
const Assignment25 = lazy(() => import('../assignments/Assignment25'));
const Assignment26 = lazy(() => import('../assignments/Assignment26'));
const Assignment27 = lazy(() => import('../assignments/Assignment27'));
const Assignment28 = lazy(() => import('../assignments/Assignment28'));
const Assignment29 = lazy(() => import('../assignments/Assignment29'));
const Assignment30 = lazy(() => import('../assignments/Assignment30'));
const Assignment31 = lazy(() => import('../assignments/Assignment31'));
const Assignment32 = lazy(() => import('../assignments/Assignment32'));
const Assignment33 = lazy(() => import('../assignments/Assignment33'));
const Assignment34 = lazy(() => import('../assignments/Assignment34'));
const Assignment35 = lazy(() => import('../assignments/Assignment35'));
const Assignment36 = lazy(() => import('../assignments/Assignment36'));
const Assignment37 = lazy(() => import('../assignments/Assignment37'));
const Assignment38 = lazy(() => import('../assignments/Assignment38'));
const Assignment39 = lazy(() => import('../assignments/Assignment39'));
const Assignment40 = lazy(() => import('../assignments/Assignment40'));
const Assignment41 = lazy(() => import('../assignments/Assignment41'));
const Assignment42 = lazy(() => import('../assignments/Assignment42'));
const Assignment43 = lazy(() => import('../assignments/Assignment43'));
const Assignment44 = lazy(() => import('../assignments/Assignment44'));
const Assignment45 = lazy(() => import('../assignments/Assignment45'));
const Assignment46 = lazy(() => import('../assignments/Assignment46'));
const Assignment47 = lazy(() => import('../assignments/Assignment47'));
const Assignment48 = lazy(() => import('../assignments/Assignment48'));
const Assignment49 = lazy(() => import('../assignments/Assignment49'));
const Assignment50 = lazy(() => import('../assignments/Assignment50'));

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
          <Route path="/assignment/13" element={<Assignment13 />} />
          <Route path="/assignment/14" element={<Assignment14 />} />
          <Route path="/assignment/15" element={<Assignment15 />} />
          <Route path="/assignment/16" element={<Assignment16 />} />
          <Route path="/assignment/17" element={<Assignment17 />} />
          <Route path="/assignment/18" element={<Assignment18 />} />
          <Route path="/assignment/19" element={<Assignment19 />} />
          <Route path="/assignment/20" element={<Assignment20 />} />
          <Route path="/assignment/21" element={<Assignment21 />} />
          <Route path="/assignment/22" element={<Assignment22 />} />
          <Route path="/assignment/23" element={<Assignment23 />} />
          <Route path="/assignment/24" element={<Assignment24 />} />
          <Route path="/assignment/25" element={<Assignment25 />} />
          <Route path="/assignment/26" element={<Assignment26 />} />
          <Route path="/assignment/27" element={<Assignment27 />} />
          <Route path="/assignment/28" element={<Assignment28 />} />
          <Route path="/assignment/29" element={<Assignment29 />} />
          <Route path="/assignment/30" element={<Assignment30 />} />
          <Route path="/assignment/31" element={<Assignment31 />} />
          <Route path="/assignment/32" element={<Assignment32 />} />
          <Route path="/assignment/33" element={<Assignment33 />} />
          <Route path="/assignment/34" element={<Assignment34 />} />
          <Route path="/assignment/35" element={<Assignment35 />} />
          <Route path="/assignment/36" element={<Assignment36 />} />
          <Route path="/assignment/37" element={<Assignment37 />} />
          <Route path="/assignment/38" element={<Assignment38 />} />
          <Route path="/assignment/39" element={<Assignment39 />} />
          <Route path="/assignment/40" element={<Assignment40 />} />
          <Route path="/assignment/41" element={<Assignment41 />} />
          <Route path="/assignment/42" element={<Assignment42 />} />
          <Route path="/assignment/43" element={<Assignment43 />} />
          <Route path="/assignment/44" element={<Assignment44 />} />
          <Route path="/assignment/45" element={<Assignment45 />} />
          <Route path="/assignment/46" element={<Assignment46 />} />
          <Route path="/assignment/47" element={<Assignment47 />} />
          <Route path="/assignment/48" element={<Assignment48 />} />
          <Route path="/assignment/49" element={<Assignment49 />} />
          <Route path="/assignment/50" element={<Assignment50 />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
