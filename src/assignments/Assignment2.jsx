import React, { useState, useRef } from 'react';
import AssignmentLayout from '../components/AssignmentLayout';

const Assignment2 = () => {
  const [typingStatus, setTypingStatus] = useState('');
  const typingTimeoutRef = useRef(null);


// doubt 
  const handleTyping = (e) => {
    setTypingStatus('User is typing...');
    
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    
    typingTimeoutRef.current = setTimeout(() => {
      if (e.target.value.trim() !== '') {
        setTypingStatus('User stopped typing...');
      } else {
        setTypingStatus('');
      }
    }, 2000);
  };




  const clickCountRef = useRef(0);
  const handleNoRenderClick = () => {
    clickCountRef.current += 1;
    console.log(`Click count: ${clickCountRef.current}`);
  };



  const nameRef = useRef(null);
  const messageRef = useRef(null);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log(`Feedback submitted! Name: ${nameRef.current.value}, Message: ${messageRef.current.value}`);
    
    nameRef.current.value = '';
    messageRef.current.value = '';
  };


  const searchInputRef = useRef(null)
  const handleSearch = () =>{
    alert(`Searching in progress : ${searchInputRef.current.value}`);
  }

  return (
    <AssignmentLayout title="Assignment 2: React Refs (useRef)" id={2}>
      <div className="flex flex-col gap-8 mt-6">

        <div>
          <h2 className="text-2xl font-bold mb-3">Task 1: Stop Typing Tracker</h2>
          <input type="text" onChange={handleTyping} placeholder="Type something here..." className="w-full max-w-sm px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
          />
          <p className="font-medium text-gray-700 h-6 transition-opacity">{typingStatus}</p>
        </div>


        <div>
          <h2 className="text-2xl font-bold mb-3">Task 2: Click Counter (No Re-render)</h2>
          <p className="mb-3 text-gray-600">This button maintains state but does not update the UI. Check the browser console!</p>
          <button 
            onClick={handleNoRenderClick}
            className="px-4 py-2 bg-gray-200 text-black border border-gray-400 rounded hover:bg-gray-300 transition-colors"
          >
            Increment Counter
          </button>
        </div>


        <div>
          <h2 className="text-2xl font-bold mb-3">Task 3: Feedback Form</h2>
          <form onSubmit={handleFeedbackSubmit} className="flex flex-col gap-4 max-w-sm">
            <input 
              type="text" 
              ref={nameRef} 
              placeholder="Name" 
              className="px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea 
              ref={messageRef} 
              placeholder="Message" 
              className="px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
              required
            ></textarea>
            <button 
              type="submit"
              className="px-4 py-2 bg-gray-200 text-black border border-gray-400 rounded hover:bg-gray-300 transition-colors self-start"
            >
              Submit Feedback
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Task 4: Search Form</h2>
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="text" 
              ref={searchInputRef}
              placeholder="Search..." 
              className="px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-xs w-full"
            />
            <button 
              onClick={handleSearch}
              className="px-4 py-2 bg-gray-200 text-black border border-gray-400 rounded hover:bg-gray-300 transition-colors whitespace-nowrap"
            >
              Search
            </button>
          </div>
        </div>

      </div>
    </AssignmentLayout>
  );
};

export default Assignment2;
