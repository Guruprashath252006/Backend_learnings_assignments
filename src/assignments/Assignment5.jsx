import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import AssignmentLayout from '../components/AssignmentLayout';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="p-4 border rounded shadow-sm bg-gray-50 mb-4">
      <h3 className="font-bold text-lg mb-2">1. Counter App (useState)</h3>
      <p className="mb-2">Count: {count}</p>
      <button onClick={() => setCount(count + 1)} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
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
    <div className="p-4 border rounded shadow-sm bg-gray-50 mb-4">
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
    <div className="p-4 border rounded shadow-sm bg-gray-50 mb-4">
      <h3 className="font-bold text-lg mb-2">3. Focus Input (useRef)</h3>
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Type here..." 
        className="border px-2 py-1 rounded mr-2"
      />
      <button onClick={handleFocus} className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
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
        className={`px-3 py-1 text-white rounded ${isAuth ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
      >
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

const AuthApp = () => {
  return (
    <div className="p-4 border rounded shadow-sm bg-gray-50 mb-4">
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
    <div className="p-4 border rounded shadow-sm bg-gray-50 mb-4">
      <h3 className="font-bold text-lg mb-2">5. Reusable Logic (Custom Hook: useToggle)</h3>
      <p className="mb-2">The light is {isOn ? "ON 💡" : "OFF 🌑"}</p>
      <button onClick={toggleIsOn} className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600">
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
  <button onClick={showAlert} className="px-3 py-1 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600">
    Show Alert
  </button>
);

const AlertButtonWithHOC = withAlert(SimpleButton);

const HocApp = () => {
  return (
    <div className="p-4 border rounded shadow-sm bg-gray-50 mb-4">
      <h3 className="font-bold text-lg mb-2">6. Add Alert (HOC)</h3>
      <AlertButtonWithHOC />
    </div>
  );
};

const Assignment5 = () => {
  return (
    <AssignmentLayout title="Assignment 5" id={5}>
      <div className="p-6 border rounded bg-white text-black space-y-8 max-w-4xl mx-auto flex flex-col items-start text-left w-full">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2 w-full">React Hooks & Concepts Q&A</h2>

        <section className="w-full">
          <h3 className="text-xl font-bold text-blue-600 mb-3">useState</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">1. What is useState in React? Why do we use it?</h4>
              <p className="mt-1 text-gray-800"><code className="bg-gray-100 px-1 rounded text-red-500">useState</code> is a React Hook used to store data (state) in a component. It allows us to update UI dynamically when data changes.</p>
              <div className="mt-2 p-3 bg-gray-50 border-l-4 border-blue-400 rounded">
                <p className="text-gray-800"><strong>Example:</strong> Button click &rarr; count increases &rarr; UI updates</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg">2. What will happen if you update state directly without using setter function?</h4>
              <ul className="list-disc ml-5 mt-1 space-y-1 text-gray-800">
                <li>React will <strong>not</strong> re-render the component properly.</li>
                <li>UI will not update correctly.</li>
              </ul>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="p-4 bg-red-50 border border-red-200 rounded">
                   <p className="text-red-700 font-bold mb-2">Wrong:</p>
                   <code className="bg-white px-2 py-1 rounded shadow-sm text-sm text-gray-800">count = count + 1;</code>
                 </div>
                 <div className="p-4 bg-green-50 border border-green-200 rounded">
                   <p className="text-green-700 font-bold mb-2">Correct:</p>
                   <code className="bg-white px-2 py-1 rounded shadow-sm text-sm text-gray-800">setCount(count + 1);</code>
                 </div>
              </div>
              <p className="mt-3 text-blue-700 font-medium">Always use setter function.</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">3. Counter example using useState</h4>
              <pre className="mt-2 p-4 bg-gray-900 text-gray-100 rounded-md overflow-x-auto text-sm leading-relaxed">
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
        </section>

        <hr className="border-gray-200 w-full" />

        <section className="w-full">
          <h3 className="text-xl font-bold text-blue-600 mb-3">useEffect</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">1. What is useEffect and why is it used?</h4>
              <p className="mt-1 text-gray-800"><code className="bg-gray-100 px-1 rounded text-red-500">useEffect</code> is used to perform side effects. Example:</p>
              <ul className="list-disc ml-5 mt-2 text-gray-800 space-y-1">
                <li>API calls</li>
                <li>Fetching data</li>
                <li>Timer</li>
                <li>DOM updates</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg">2. Difference between:</h4>
              <div className="mt-3 space-y-3">
                <div className="p-4 bg-gray-50 border border-gray-200 rounded shadow-sm">
                  <p><code className="bg-white border px-1.5 py-0.5 rounded font-bold text-indigo-700 text-sm">useEffect(() =&gt; {'{}'})</code></p>
                  <p className="text-gray-700 mt-2 font-medium">Runs on every render</p>
                </div>
                <div className="p-4 bg-gray-50 border border-gray-200 rounded shadow-sm">
                  <p><code className="bg-white border px-1.5 py-0.5 rounded font-bold text-indigo-700 text-sm">useEffect(() =&gt; {'{}'}, [])</code></p>
                  <p className="text-gray-700 mt-2 font-medium">Runs only once (when component loads)</p>
                </div>
                <div className="p-4 bg-gray-50 border border-gray-200 rounded shadow-sm">
                  <p><code className="bg-white border px-1.5 py-0.5 rounded font-bold text-indigo-700 text-sm">useEffect(() =&gt; {'{}'}, [value])</code></p>
                  <p className="text-gray-700 mt-2 font-medium">Runs only when value changes</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg">3. API call using useEffect (async/await)</h4>
              <pre className="mt-2 p-4 bg-gray-900 text-gray-100 rounded-md overflow-x-auto text-sm leading-relaxed">
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
        </section>

        <hr className="border-gray-200 w-full" />

        <section className="w-full">
          <h3 className="text-xl font-bold text-blue-600 mb-3">useRef</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">1. What is useRef and how is it different from useState?</h4>
              <div className="mt-2 space-y-4">
                <div className="p-3 bg-gray-50 rounded border-l-4 border-indigo-400">
                  <p className="font-bold text-gray-800 mb-1">useRef:</p>
                  <ul className="list-disc ml-5 text-gray-800">
                    <li>Stores value without re-rendering</li>
                    <li>Used to access DOM elements</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold text-gray-800 mb-2">Difference:</p>
                  <div className="overflow-x-auto rounded border border-gray-200">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-gray-100 text-gray-800">
                          <th className="border-b border-gray-200 p-3 w-1/2">useState</th>
                          <th className="border-b border-l border-gray-200 p-3 w-1/2">useRef</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border-b border-gray-200 p-3 text-red-700 font-medium">Causes re-render</td>
                          <td className="border-b border-l border-gray-200 p-3 text-green-700 font-medium">No re-render</td>
                        </tr>
                        <tr>
                          <td className="border-b border-gray-200 p-3 text-gray-800">Stores UI data</td>
                          <td className="border-b border-l border-gray-200 p-3 text-gray-800">Stores reference/value</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-gray-800">Used in UI</td>
                          <td className="border-l border-gray-200 p-3 text-gray-800">Used for DOM & memory</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg">2. Focus input using useRef</h4>
              <pre className="mt-2 p-4 bg-gray-900 text-gray-100 rounded-md overflow-x-auto text-sm leading-relaxed">
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
        </section>

        <hr className="border-gray-200 w-full" />

        <section className="w-full">
          <h3 className="text-xl font-bold text-blue-600 mb-3">useContext</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">1. What problem does useContext solve?</h4>
              <p className="mt-1 font-medium text-gray-800">Avoids prop drilling</p>
              <p className="text-gray-600 text-sm mt-1">(passing data through many components)</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">2. Steps to create and use context</h4>
              <div className="mt-3 space-y-4">
                <div className="p-3 border rounded shadow-sm bg-gray-50">
                  <p className="font-bold text-indigo-700 mb-2 text-sm uppercase tracking-wider">Step 1: Create context</p>
                  <pre className="p-3 bg-gray-900 text-gray-100 rounded text-sm">
{`const MyContext = React.createContext();`}
                  </pre>
                </div>
                <div className="p-3 border rounded shadow-sm bg-gray-50">
                  <p className="font-bold text-indigo-700 mb-2 text-sm uppercase tracking-wider">Step 2: Provide value</p>
                  <pre className="p-3 bg-gray-900 text-gray-100 rounded text-sm">
{`<MyContext.Provider value="Hello">
  <Child />
</MyContext.Provider>`}
                  </pre>
                </div>
                <div className="p-3 border rounded shadow-sm bg-gray-50">
                  <p className="font-bold text-indigo-700 mb-2 text-sm uppercase tracking-wider">Step 3: Use in child</p>
                  <pre className="p-3 bg-gray-900 text-gray-100 rounded text-sm">
{`import { useContext } from "react";

const value = useContext(MyContext);`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200 w-full" />

        <section className="w-full">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Custom Hooks</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">1. What is a custom hook in React?</h4>
              <ul className="list-disc ml-5 mt-2 text-gray-800 space-y-1">
                <li>A function starting with <code className="bg-gray-100 border px-1 rounded text-red-500 font-mono">use</code></li>
                <li>Used to reuse logic</li>
              </ul>
              <div className="mt-4">
                <p className="font-medium text-gray-800 mb-1">Example:</p>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-md overflow-x-auto text-sm leading-relaxed">
{`function useCounter() {
  const [count, setCount] = useState(0);
  return { count, setCount };
}`}
                </pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg">2. Why use custom hooks?</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded text-sm font-medium">Reuse logic</span>
                <span className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded text-sm font-medium">Cleaner code</span>
                <span className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded text-sm font-medium">Avoid duplication</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200 w-full" />

        <section className="w-full">
          <h3 className="text-xl font-bold text-blue-600 mb-3">HOC (Higher Order Component)</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">1. What is HOC in React?</h4>
              <p className="mt-1 text-gray-800">A function that takes a component and returns a new component.</p>
              <div className="mt-3">
                <p className="font-medium text-gray-800 mb-1">Example:</p>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-md overflow-x-auto text-sm leading-relaxed">
{`function withLogger(Component) {
  return function() {
    console.log("Rendered");
    return <Component />;
  };
}`}
                </pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg">2. Real-time example</h4>
              <p className="mt-1 font-medium text-gray-800">Authentication check</p>
              <div className="mt-3 p-4 bg-indigo-50 border border-indigo-100 rounded shadow-sm">
                <p className="text-indigo-800 font-bold mb-2">Example:</p>
                <ul className="list-disc ml-5 text-indigo-900 space-y-1">
                  <li>If user is logged in &rarr; <strong>show page</strong></li>
                  <li>Else &rarr; <strong>redirect to login</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200 w-full" />

        <section className="w-full">
          <h3 className="text-xl font-bold text-orange-600 mb-4">Practical / Mixed</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-3">HOC vs Custom Hook</h4>
              <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100 text-gray-800">
                      <th className="border-b border-gray-200 p-3 w-1/2">HOC</th>
                      <th className="border-b border-l border-gray-200 p-3 w-1/2">Custom Hook</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border-b border-gray-200 p-3 text-gray-800">Wraps component</td>
                      <td className="border-b border-l border-gray-200 p-3 text-gray-800">Uses function</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border-b border-gray-200 p-3 text-gray-800">Returns new component</td>
                      <td className="border-b border-l border-gray-200 p-3 text-gray-800">Returns data/logic</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 text-gray-800">Used for UI logic</td>
                      <td className="border-l border-gray-200 p-3 text-gray-800">Used for reusable logic</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-3">When to use each?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-blue-50 border border-blue-200 rounded shadow-sm">
                  <p className="font-bold text-blue-800 text-lg mb-2">Use HOC</p>
                  <p className="text-gray-800 mb-3">When you want to <strong>modify component behavior</strong>.</p>
                  <p className="text-sm text-blue-700 bg-blue-100 border border-blue-200 inline-block px-2 py-1 rounded">Example: Authentication, logging</p>
                </div>
                
                <div className="p-5 bg-green-50 border border-green-200 rounded shadow-sm">
                  <p className="font-bold text-green-800 text-lg mb-2">Use Custom Hook</p>
                  <p className="text-gray-800 mb-3">When you want to <strong>reuse logic</strong>.</p>
                  <p className="text-sm text-green-700 bg-green-100 border border-green-200 inline-block px-2 py-1 rounded">Example: API call, form handling</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200 w-full my-8" />

        <section className="w-full">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Practical Implementations</h2>
          
          <CounterApp />
          <ApiFetchApp />
          <FocusInputApp />
          <AuthApp />
          <CustomHookApp />
          <HocApp />
          
        </section>

      </div>
    </AssignmentLayout>
  );
};

export default Assignment5;
