import React from 'react';
import AssignmentLayout from '../components/AssignmentLayout';

const Assignment3 = () => {
  return (
    <AssignmentLayout title="Assignment 3" id={3}>
      <div className="p-4 border rounded bg-gray-50">
        <h2 className="text-xl font-bold mb-4">Assignment 3 Content</h2>
        <p>This is the placeholder content for Assignment 3. Add your logic here.</p>
      </div>
    </AssignmentLayout>
  );
};

export default Assignment3;
