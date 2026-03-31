import React, { useState, useMemo } from 'react';
import AssignmentLayout from '../components/AssignmentLayout';

const generateLargeArray = () => {
  return Array.from({ length: 10000 }, () => Math.floor(Math.random() * 100));
};

const Assignment5 = () => {
  const [num1, setNum1] = useState(0);
  const [sumResult, setSumResult] = useState(null);

  const calculateHeavySum = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  };

  const handleSumCalculate = () => {
    setSumResult(calculateHeavySum(Number(num1)));
  };

  const [largeArray, setLargeArray] = useState(generateLargeArray);
  
  const filteredEvenSum = useMemo(() => {
    const evens = largeArray.filter(n => n % 2 === 0);
    return evens.reduce((acc, curr) => acc + curr, 0);
  }, [largeArray]);

  const handleRegenerateArray = () => {
    setLargeArray(generateLargeArray());
  };

  const [num3, setNum3] = useState('');
  const [primeResult, setPrimeResult] = useState(null);

  const checkPrimeHeavy = (n) => {
    if (n <= 1) return false;
    let isPrime = true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
        }
    }
    return isPrime;
  };

  const handleCheckPrime = () => {
    setPrimeResult(checkPrimeHeavy(Number(num3)) ? 'Prime' : 'Not Prime');
  };

  return (
    <AssignmentLayout title="Assignment 5: Heavy Computations" id={5}>
      <div className="space-y-8 max-w-4xl mx-auto py-4">
        
        <div className="p-6 border rounded-xl bg-white shadow-sm border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 text-blue-700 p-2 rounded-lg font-bold">1</div>
            <h2 className="text-xl font-bold text-gray-800">Heavy Sum Calculation</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              className="border border-gray-300 p-2.5 rounded-lg w-full sm:max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              placeholder="Enter a number (e.g., 5)"
            />
            <button 
              onClick={handleSumCalculate}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg w-full sm:w-auto transition-colors shadow-sm"
            >
              Calculate Sum
            </button>
          </div>
          {sumResult !== null && (
            <div className="mt-4 p-4 bg-blue-50 text-blue-800 rounded-lg border border-blue-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>The sum from 1 to {num1} is <strong className="text-lg">{sumResult}</strong></span>
            </div>
          )}
        </div>

        <div className="p-6 border rounded-xl bg-white shadow-sm border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 text-green-700 p-2 rounded-lg font-bold">2</div>
            <h2 className="text-xl font-bold text-gray-800">Large Array Filtering</h2>
          </div>
          <p className="text-gray-600 mb-4 text-sm">Filters an array of 10,000 random numbers to sum only the even ones.</p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <button 
              onClick={handleRegenerateArray}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-6 rounded-lg w-full sm:w-auto transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Regenerate Array
            </button>
          </div>
          <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-lg border border-green-100 flex flex-col gap-1">
            <div className="flex justify-between max-w-xs">
              <span className="font-medium">Total Numbers:</span> 
              <span>{largeArray.length.toLocaleString()}</span>
            </div>
            <div className="flex justify-between max-w-xs text-lg mt-1 pt-1 border-t border-green-200">
              <span className="font-bold">Sum of Evens:</span> 
              <span className="font-extrabold">{filteredEvenSum.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="p-6 border rounded-xl bg-white shadow-sm border-gray-100">
          <div className="flex items-center gap-3 mb-4">
             <div className="bg-purple-100 text-purple-700 p-2 rounded-lg font-bold">3</div>
             <h2 className="text-xl font-bold text-gray-800">Prime Number Checker</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <input
              type="number"
              value={num3}
              onChange={(e) => setNum3(e.target.value)}
              className="border border-gray-300 p-2.5 rounded-lg w-full sm:max-w-xs focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
              placeholder="Enter a number (e.g., 97)"
            />
            <button 
              onClick={handleCheckPrime}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 px-6 rounded-lg w-full sm:w-auto transition-colors shadow-sm"
            >
              Check Prime
            </button>
          </div>
          {primeResult !== null && (
             <div className="mt-4 p-4 bg-purple-50 text-purple-800 rounded-lg border border-purple-100 flex items-center gap-2">
               {primeResult === 'Prime' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
               ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
               )}
               <span>{num3} is <strong>{primeResult}</strong></span>
             </div>
          )}
        </div>

      </div>
    </AssignmentLayout>
  );
};

export default Assignment5;
