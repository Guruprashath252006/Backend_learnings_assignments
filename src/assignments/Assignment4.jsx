import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import AssignmentLayout from '../components/AssignmentLayout';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="mb-6">
      <h3 className="font-bold text-lg mb-2">1. Counter App (useState)</h3>
      <p className="mb-2">Count: {count}</p>
      <button onClick={() => setCount(count + 1)} className="px-3 py-1 bg-blue-500 text-white hover:bg-blue-600">
        Increase
      </button>
    </div>
  );
};

const ApiFetchApp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then(res => res.json())
      .then(result => {
        setData(result);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mb-6">
      <h3 className="font-bold text-lg mb-2">2. API Fetch (useEffect)</h3>
      {loading ? <p>Loading...</p> : (
        <ul className="list-disc ml-5 text-sm">
          {data.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
      )}
    </div>
  );
};

const FocusInputApp = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="mb-6">
      <h3 className="font-bold text-lg mb-2">3. Focus Input (useRef)</h3>
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Type here..." 
        className="border px-2 py-1 mr-2"
      />
      <button onClick={handleFocus} className="px-3 py-1 bg-green-500 text-white hover:bg-green-600">
        Focus
      </button>
    </div>
  );
};

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthStatus = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <div>
      <p className="mb-2">Status: <strong>{isAuth ? "Logged In" : "Logged Out"}</strong></p>
      <button 
        onClick={() => setIsAuth(!isAuth)} 
        className={`px-3 py-1 text-white ${isAuth ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
      >
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

const AuthApp = () => {
  return (
    <div className="mb-6">
      <h3 className="font-bold text-lg mb-2">4. Auth Setup (useContext)</h3>
      <AuthProvider>
        <AuthStatus />
      </AuthProvider>
    </div>
  );
};

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(prev => !prev);
  return [value, toggle];
}

const CustomHookApp = () => {
  const [isOn, toggleIsOn] = useToggle(false);
  return (
    <div className="mb-6">
      <h3 className="font-bold text-lg mb-2">5. Reusable Logic (Custom Hook: useToggle)</h3>
      <p className="mb-2">The light is {isOn ? "ON 💡" : "OFF 🌑"}</p>
      <button onClick={toggleIsOn} className="px-3 py-1 bg-purple-500 text-white hover:bg-purple-600">
        Toggle
      </button>
    </div>
  );
};

const withAlert = (WrappedComponent) => {
  return (props) => {
    const triggerAlert = () => alert("This is an alert from HOC!");
    return <WrappedComponent {...props} showAlert={triggerAlert} />;
  };
};

const SimpleButton = ({ showAlert }) => (
  <button onClick={showAlert} className="px-3 py-1 bg-yellow-500 text-black font-semibold hover:bg-yellow-600">
    Show Alert
  </button>
);

const AlertButtonWithHOC = withAlert(SimpleButton);

const HocApp = () => {
  return (
    <div className="mb-6">
      <h3 className="font-bold text-lg mb-2">6. Add Alert (HOC)</h3>
      <AlertButtonWithHOC />
    </div>
  );
};

const Assignment4 = () => {
  return (
    <AssignmentLayout title="Assignment 4" id={4}>
      <div className="p-4 text-black max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-6">React Hooks & Concepts Q&A</h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">useState</h3>
          
          <div className="mb-4">
            <h4 className="font-bold">1. What is useState in React? Why do we use it?</h4>
            <p className="mt-1 text-gray-800">useState is a React Hook used to store data (state) in a component. It allows us to update UI dynamically when data changes.</p>
            <p className="mt-1 text-gray-800">Example: Button click &rarr; count increases &rarr; UI updates</p>
          </div>

          <div className="mb-4">
            <h4 className="font-bold">2. What will happen if you update state directly without using setter function?</h4>
            <ul className="list-disc ml-5 mt-1 text-gray-800">
              <li>React will not re-render the component properly.</li>
              <li>UI will not update correctly.</li>
            </ul>
            <p className="mt-2 text-red-700">Wrong: count = count + 1;</p>
            <p className="text-green-700">Correct: setCount(count + 1);</p>
            <p className="mt-2">Always use setter function.</p>
          </div>

          <div className="mb-4">
            <h4 className="font-bold">3. Counter example using useState</h4>
            <pre className="mt-2 text-sm text-gray-800 whitespace-pre-wrap">
{`import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;`}
            </pre>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">useEffect</h3>
          
          <div className="mb-4">
            <h4 className="font-bold">1. What is useEffect and why is it used?</h4>
            <p className="mt-1 text-gray-800">useEffect is used to perform side effects. Example:</p>
            <ul className="list-disc ml-5 mt-1 text-gray-800">
              <li>API calls</li>
              <li>Fetching data</li>
              <li>Timer</li>
              <li>DOM updates</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-bold">2. Difference between:</h4>
            <ul className="list-disc ml-5 mt-1 text-gray-800">
              <li className="mb-1">useEffect(() =&gt; {'{}'}) - Runs on every render</li>
              <li className="mb-1">useEffect(() =&gt; {'{}'}, []) - Runs only once (when component loads)</li>
              <li className="mb-1">useEffect(() =&gt; {'{}'}, [value]) - Runs only when value changes</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-bold">3. API call using useEffect (async/await)</h4>
            <pre className="mt-2 text-sm text-gray-800 whitespace-pre-wrap">
{`import React, { useEffect, useState } from "react";

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();
      setData(result);
    }

    fetchData();
  }, []);

  return <div>{data.length}</div>;
}`}
            </pre>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">useRef</h3>
          
          <div className="mb-4">
            <h4 className="font-bold">1. What is useRef and how is it different from useState?</h4>
            <p className="mt-1 text-gray-800">useRef stores value without re-rendering and is used to access DOM elements.</p>
            <h5 className="font-semibold mt-2">Difference:</h5>
            <ul className="list-disc ml-5 text-gray-800">
              <li>useState: Causes re-render, stores UI data, used in UI.</li>
              <li>useRef: No re-render, stores reference/value, used for DOM & memory.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-bold">2. Focus input using useRef</h4>
            <pre className="mt-2 text-sm text-gray-800 whitespace-pre-wrap">
{`import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}`}
            </pre>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">useContext</h3>
          
          <div className="mb-4">
            <h4 className="font-bold">1. What problem does useContext solve?</h4>
            <p className="mt-1 text-gray-800">Avoids prop drilling (passing data through many components).</p>
          </div>

          <div className="mb-4">
            <h4 className="font-bold">2. Steps to create and use context</h4>
            <p className="mt-2 font-semibold">Step 1: Create context</p>
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">const MyContext = React.createContext();</pre>
            
            <p className="mt-2 font-semibold">Step 2: Provide value</p>
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">
{`<MyContext.Provider value="Hello">
  <Child />
</MyContext.Provider>`}
            </pre>
            
            <p className="mt-2 font-semibold">Step 3: Use in child</p>
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">
{`import { useContext } from "react";
const value = useContext(MyContext);`}
            </pre>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Custom Hooks</h3>
          
          <div className="mb-4">
            <h4 className="font-bold">1. What is a custom hook in React?</h4>
            <ul className="list-disc ml-5 mt-1 text-gray-800">
              <li>A function starting with "use"</li>
              <li>Used to reuse logic</li>
            </ul>
            <h5 className="font-semibold mt-2">Example:</h5>
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">
{`function useCounter() {
  const [count, setCount] = useState(0);
  return { count, setCount };
}`}
            </pre>
          </div>

          <div className="mb-4">
            <h4 className="font-bold">2. Why use custom hooks?</h4>
            <p className="mt-1 text-gray-800">Reuse logic, cleaner code, avoid duplication.</p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">HOC (Higher Order Component)</h3>
          
          <div className="mb-4">
            <h4 className="font-bold">1. What is HOC in React?</h4>
            <p className="mt-1 text-gray-800">A function that takes a component and returns a new component.</p>
            <h5 className="font-semibold mt-2">Example:</h5>
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">
{`function withLogger(Component) {
  return function() {
    console.log("Rendered");
    return <Component />;
  };
}`}
            </pre>
          </div>

          <div className="mb-4">
            <h4 className="font-bold">2. Real-time example</h4>
            <p className="mt-1 text-gray-800">Authentication check.</p>
            <ul className="list-disc ml-5 mt-1 text-gray-800">
              <li>If user is logged in &rarr; show page</li>
              <li>Else &rarr; redirect to login</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Practical / Mixed</h3>
          
          <div className="mb-4">
            <h4 className="font-bold">HOC vs Custom Hook</h4>
            <ul className="list-disc ml-5 mt-1 text-gray-800">
              <li><strong>HOC:</strong> Wraps component, returns new component, used for UI logic.</li>
              <li><strong>Custom Hook:</strong> Uses function, returns data/logic, used for reusable logic.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-bold">When to use each?</h4>
            <p className="mt-2"><strong>Use HOC:</strong></p>
            <p className="text-gray-800">When you want to modify component behavior. (Example: Authentication, logging)</p>
            <p className="mt-2"><strong>Use Custom Hook:</strong></p>
            <p className="text-gray-800">When you want to reuse logic. (Example: API call, form handling)</p>
          </div>
        </div>

        <hr className="my-8" />

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Practical Implementations</h2>
          <CounterApp />
          <ApiFetchApp />
          <FocusInputApp />
          <AuthApp />
          <CustomHookApp />
          <HocApp />
        </div>

      </div>
    </AssignmentLayout>
  );
};

export default Assignment4;
