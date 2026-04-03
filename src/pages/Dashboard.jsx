import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { authState, authDispatch } = useAuth();
  const { cartState, cartDispatch } = useCart();
  const navigate = useNavigate();

  if (!authState.isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] bg-red-50 rounded-2xl p-8">
        <h2 className="text-2xl font-black text-rose-600 mb-4">ACCESS DENIED</h2>
        <p className="text-slate-600 mb-6 font-medium text-center">You must be logged in to access the secure dashboard. Please go to Assignment 8 to login.</p>
        <button 
          onClick={() => navigate('/assignment/8')}
          className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold uppercase tracking-tight hover:bg-slate-800 transition-all shadow-lg"
        >
          Login via Assignment 8
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-8 rounded-3xl border-2 border-slate-100 dark:border-slate-800 shadow-sm">
        <div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
            Welcome back, {authState.user.username}!
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Your account status: <span className="text-green-500">Securely Logged In</span></p>
        </div>
        <button 
          onClick={() => authDispatch({ type: 'LOGOUT' })}
          className="bg-rose-50 text-rose-600 px-6 py-2 rounded-xl font-black uppercase text-xs hover:bg-rose-100 transition-all border border-rose-100"
        >
          Logout Securely
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Cart Summary */}
        <div className="p-8 border-2 border-slate-100 dark:border-slate-800 rounded-3xl bg-white dark:bg-slate-900 shadow-sm">
          <h3 className="text-xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
             <span className="w-8 h-8 bg-indigo-100 dark:bg-indigo-950 text-indigo-600 rounded-lg flex items-center justify-center text-sm">🛒</span>
             Your Cart Stats
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
              <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Item Count</p>
              <p className="text-3xl font-black text-slate-900 dark:text-white">{cartState.count}</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
              <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Total Value</p>
              <p className="text-3xl font-black text-indigo-600">₹{cartState.total.toFixed(2)}</p>
            </div>
          </div>
          <button 
            onClick={() => cartDispatch({ type: 'CLEAR_CART' })}
            className="w-full mt-6 py-3 border-2 border-rose-100 dark:border-rose-950 text-rose-500 rounded-2xl font-black uppercase text-xs hover:bg-rose-50 dark:hover:bg-rose-950 transition-all"
          >
            Reset/Empty Cart
          </button>
        </div>

        {/* Global System Check */}
        <div className="p-8 border-2 border-slate-100 dark:border-slate-800 rounded-3xl bg-white dark:bg-slate-900 shadow-sm">
          <h3 className="text-xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-amber-100 dark:bg-amber-950 text-amber-600 rounded-lg flex items-center justify-center text-sm">🛡️</span>
            System Diagnostics
          </h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="text-sm font-bold text-slate-500">Theme Engine:</span>
              <span className="text-xs font-black uppercase bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full">ACTIVE</span>
            </li>
            <li className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="text-sm font-bold text-slate-500">Auth Persistence:</span>
              <span className="text-xs font-black uppercase bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full">ENABLED</span>
            </li>
            <li className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="text-sm font-bold text-slate-500">Lazy Loaded Component:</span>
              <span className="text-xs font-black uppercase bg-green-100 text-green-700 px-3 py-1 rounded-full">READY</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
