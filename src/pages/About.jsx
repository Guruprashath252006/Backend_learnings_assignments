import React from 'react';

const About = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-black mb-4">About Page</h1>
      <p className="text-slate-600">This page is lazy-loaded using React.lazy() and Suspense!</p>
    </div>
  );
};

export default About;
