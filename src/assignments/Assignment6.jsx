import React, { useState, useMemo, useCallback, memo } from 'react';
import AssignmentLayout from '../components/AssignmentLayout';

// Child component memoized to avoid unnecessary re-renders
const CalculationChild = memo(({ calculateSquare }) => {
  const result = calculateSquare(10);
  return (
    <div className="mt-4 p-3 border rounded bg-white text-sm">
      <h4 className="font-semibold mb-2 text-gray-700">Task 3: useCallback & React.memo</h4>
      <p>Heavy Calculation Result for 10²: <span className="font-bold text-blue-600">{result}</span></p>
    </div>
  );
});

const Assignment6 = () => {
  // State for random numbers and search query
  const [numbers, setNumbers] = useState(() =>
    Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
  );
  const [search, setSearch] = useState('');

  // Generate a static list of 5,000 names once
  const names = useMemo(() => {
    const base = ["John", "Jane", "Alice", "Bob", "Charlie", "David", "Eve"];
    return Array.from({ length: 5000 }, (_, i) => `${base[i % base.length]} ${i + 1}`);
  }, []);

  // Memoized sorted numbers – recompute only when numbers change
  const sortedNumbers = useMemo(() => {
    return [...numbers].sort((a, b) => a - b);
  }, [numbers]);

  // Memoized filtered names – recompute only when search changes
  const filteredNames = useMemo(() => {
    return names
      .filter(name => name.toLowerCase().includes(search.toLowerCase()))
      .slice(0, 5); // limit output for minimal UI
  }, [search, names]);

  // Heavy calculation wrapped in useCallback to keep reference stable
  const calculateSquare = useCallback((num) => {
    let result = 1;
    for (let i = 0; i < 1000000; i++) {
      result = num * num;
    }
    return result;
  }, []);

  return (
    <AssignmentLayout title="Assignment 6: Performance Optimization" id={6}>
      <div className="p-6 bg-white text-gray-900 rounded-lg">
        {/* Sorting Numbers */}
        <section className="p-5 bg-white rounded border border-gray-100 shadow-sm">
          <h3 className="text-sm font-bold mb-3 uppercase tracking-tighter opacity-70">Sorting Numbers (useMemo)</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {sortedNumbers.map((num, i) => (
              <span key={i} className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded text-xs font-mono">{num}</span>
            ))}
          </div>
          <button
            onClick={() => setNumbers(Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)))}
            className="text-[10px] font-bold text-indigo-600 hover:underline"
          >
            Refresh Array
          </button>
        </section>

        {/* Search Filter */}
        <section className="p-5 bg-white rounded border border-gray-100 shadow-sm mt-4">
          <h3 className="text-sm font-bold mb-3 uppercase tracking-tighter opacity-70">Search Filter (useMemo)</h3>
          <input
            type="text"
            placeholder="Search names..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent border-b border-gray-200 py-1 mb-4 text-sm outline-none focus:border-indigo-500"
          />
          <div className="grid grid-cols-1 gap-1">
            {filteredNames.map((name, i) => (
              <div key={i} className="text-xs py-1 border-b border-gray-50 italic opacity-80">{name}</div>
            ))}
          </div>
        </section>

        {/* useCallback Optimization */}
        <section className="p-5 bg-white rounded border border-gray-100 shadow-sm mt-4">
          <h3 className="text-sm font-bold mb-3 uppercase tracking-tighter opacity-70">Optimization (useCallback)</h3>
          <CalculationChild calculateSquare={calculateSquare} />
        </section>

        <p className="text-center text-[10px] opacity-40 uppercase tracking-widest pt-4">Assignment 6 Complete</p>
      </div>
    </AssignmentLayout>
  );
};

export default Assignment6;
