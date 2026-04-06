import React from 'react';
import AssignmentLayout from '../components/AssignmentLayout';

const Assignment9 = () => {
  return (
    <AssignmentLayout title="Assignment 9 - Node.js Basics" id={9}>
      <div className="p-6 border rounded-xl bg-white shadow-sm space-y-6 dark:bg-slate-900 border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Node.js Basics</h2>
        
        <div className="space-y-6 text-slate-700 dark:text-slate-300">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg border border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">1. What is Node.js?</h3>
            <p className="leading-relaxed">Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It is built on Chrome's V8 JavaScript engine and allows developers to use JavaScript to write command-line tools and for server-side scripting.</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg border border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">2. Is Node.js a framework?</h3>
            <p className="leading-relaxed">No, Node.js is not a framework. It is a JavaScript runtime environment. Frameworks like Express.js or Nest.js are built <em>on top</em> of Node.js to provide specific structures and abstractions for web application development.</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg border border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">3. What is V8 Engine?</h3>
            <p className="leading-relaxed">The V8 engine is an open-source, high-performance JavaScript and WebAssembly engine developed by Google for Chrome and Chromium web browsers. Node.js uses it to compile JavaScript code directly into native machine code before executing it, which significantly improves execution speed.</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg border border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">4. What is NPM?</h3>
            <p className="leading-relaxed">NPM stands for Node Package Manager. It serves two main purposes: first, as an online repository for publishing and sharing open-source Node.js packages; second, as a command-line utility for interacting with that repository to manage module dependencies, package installations, and version control.</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg border border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">5. What are modules in Node.js?</h3>
            <p className="leading-relaxed">Modules in Node.js are reusable blocks of code or functionalities organized in single or multiple JavaScript files. They are similar to JavaScript libraries. Node.js provides core built-in modules (like <code>fs</code> for file system, <code>http</code> for networking) and also supports third-party or custom-created modules.</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg border border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">6. What is Non-blocking I/O?</h3>
            <p className="leading-relaxed">Non-blocking I/O is an asynchronous approach where an application does not halt its execution while waiting for an Input/Output operation (like querying a database or reading a file) to complete. Instead, it delegates the I/O task and continues executing other code, processing the I/O result later via callbacks, Promises, or async/await.</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg border border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">7. What is Blocking vs Non-blocking?</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Blocking (Synchronous):</strong> The execution of JavaScript in the Node.js process waits until a non-JavaScript operation (like reading a file synchronously) completes. No other JavaScript code runs during this wait time.</li>
              <li><strong>Non-blocking (Asynchronous):</strong> Multiple I/O operations can be initiated concurrently without halting the program. The process remains responsive and can handle other tasks (like incoming server requests) while waiting for background I/O operations to finish.</li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg border border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">8. What is process object?</h3>
            <p className="leading-relaxed">The <code>process</code> object in Node.js is a global object that provides information about, and control over, the current Node.js process execution. It allows access to environment variables (<code>process.env</code>), command-line arguments (<code>process.argv</code>), standard I/O streams, and provides methods like <code>process.exit()</code> to explicitly terminate the application.</p>
          </div>
        </div>
      </div>
    </AssignmentLayout>
  );
};

export default Assignment9;
