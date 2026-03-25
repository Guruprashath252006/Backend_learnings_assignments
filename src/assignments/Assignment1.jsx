import React from 'react';
import AssignmentLayout from '../components/AssignmentLayout';

const Assignment1 = () => {
  return (
    <AssignmentLayout title="Assignment 1" id={1}>
      <div className="p-4 border rounded bg-gray-50">
        <h2 className="text-xl font-bold mb-4">Assignment 1 Content</h2>
        <p>This is the placeholder content for Assignment 1. Add your logic here.</p>
      </div>
    </AssignmentLayout>
  );
};

export default Assignment1;
