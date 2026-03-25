import React from 'react';
import AssignmentLayout from '../components/AssignmentLayout';
import { useAppContext } from '../context/AppContext';

const Admin = () => (
  <div>
    <h3 className="text-xl font-bold">Dashboard</h3>
  </div>
);

const User = () => (
  <div>
    <h3 className="text-xl font-bold">Profile</h3>
  </div>
);

const Assignment1 = () => {
  const { theme, setTheme, lang, setLang, role, setRole } = useAppContext();

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  const toggleLang = () => setLang(prev => (prev === 'en' ? 'ta' : 'en'));
  const toggleRole = () => setRole(prev => (prev === 'admin' ? 'user' : 'admin'));

  return (
    <AssignmentLayout title="Context API Tasks" id={1}>
      <div className="flex flex-col gap-8 mt-6">
        
        <div>
          <h2 className="text-2xl font-bold">Task 1: Theme Switch (Light / Dark)</h2>
          <button 
            onClick={toggleTheme}
            className="mt-3 px-4 py-2 bg-gray-200 text-black border border-gray-400 rounded hover:bg-gray-300 transition-colors"
          >
            Toggle Theme
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Task 2: Language Switch (EN / Tamil)</h2>
          <p className="text-xl my-3 font-medium">
            {lang === 'en' ? 'Hello' : 'Vanakkam'}
          </p>
          <button 
            onClick={toggleLang}
            className="px-4 py-2 bg-gray-200 text-black border border-gray-400 rounded hover:bg-gray-300 transition-colors"
          >
            Change Language
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Task 4: User Role (Admin / User)</h2>
          <button 
            onClick={toggleRole}
            className="mt-3 mb-4 px-4 py-2 bg-gray-200 text-black border border-gray-400 rounded hover:bg-gray-300 transition-colors block"
          >
            Change Role
          </button>
          
          <div className="p-4 border border-gray-300 inline-block rounded min-w-[200px]">
            {role === 'admin' ? <Admin /> : <User />}
          </div>
        </div>

      </div>
    </AssignmentLayout>
  );
};

export default Assignment1;
