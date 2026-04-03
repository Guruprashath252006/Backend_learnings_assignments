import React, { useState } from 'react';
import AssignmentLayout from '../components/AssignmentLayout';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Assignment8 = () => {
  const { theme, toggleTheme } = useTheme();
  const { authState, authDispatch } = useAuth();
  const { cartState, cartDispatch } = useCart();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');

  // Sample Products
  const products = [
    { id: 1, name: 'Premium Espresso', price: 12.99 },
    { id: 2, name: 'Minimalist Journal', price: 24.50 },
    { id: 3, name: 'Wireless Headphones', price: 199.00 },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    authDispatch({ type: 'LOGIN', payload: { username } });
  };

  return (
    <AssignmentLayout title="Assignment 8: The Ecosystem" id={8}>
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Task 1: Theme Toggle (Global System) */}
        <section className="p-8 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm transition-all">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight dark:text-white">Task 1: Global Theme System</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Currently using: <span className="font-black text-indigo-600 uppercase">{theme} mode</span></p>
            </div>
            <button 
              onClick={toggleTheme}
              className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black uppercase text-xs hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
              Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
          </div>
        </section>

        {/* Task 3 & 5: Auth Flow */}
        <section className="p-8 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm">
          <h2 className="text-xl font-black uppercase tracking-tight mb-8 dark:text-white">Task 3 & 5: Authentication & Dashboard</h2>
          
          {authState.isLoggedIn ? (
            <div className="space-y-6">
              <div className="p-6 bg-green-50 dark:bg-green-950/30 rounded-2xl border border-green-100 dark:border-green-900 flex justify-between items-center">
                <p className="font-bold text-green-700 dark:text-green-400">Welcome, {authState.user.username}! You have unlocked the ecosystem.</p>
                <button 
                  onClick={() => navigate('/dashboard')}
                  className="bg-green-600 text-white px-4 py-2 rounded-xl font-black uppercase text-[10px] hover:bg-green-700 transition-all shadow-md"
                >
                  View Private Dashboard
                </button>
              </div>
              
              {/* Product List / Cart System (Task 2) */}
              <div className="mt-8">
                <h3 className="text-sm font-black uppercase text-slate-400 mb-4 tracking-widest">Marketplace (Cart System)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {products.map((product) => (
                    <div key={product.id} className="p-4 border-2 border-slate-50 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-800/30">
                      <p className="font-black text-slate-900 dark:text-white mb-1">{product.name}</p>
                      <p className="text-indigo-600 font-bold mb-4">₹{product.price}</p>
                      <button 
                        onClick={() => cartDispatch({ type: 'ADD_ITEM', payload: product })}
                        className="w-full bg-indigo-600 text-white py-2 rounded-xl font-black uppercase text-[10px] hover:bg-indigo-700 transition-all"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cart Summary */}
              <div className="mt-8 p-6 bg-slate-900 dark:bg-indigo-950 text-white rounded-3xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-black uppercase text-xs tracking-widest text-indigo-300">Cart Statistics</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-black">{cartState.count} Items</span>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-3xl font-black">₹{cartState.total.toFixed(2)}</p>
                  <button 
                    onClick={() => authDispatch({ type: 'LOGOUT' })}
                    className="text-indigo-300 hover:text-white font-bold text-xs uppercase"
                  >
                    Logout System
                  </button>
                </div>
              </div>

            </div>
          ) : (
            <div className="max-w-sm">
              <p className="text-slate-500 dark:text-slate-400 mb-6 font-medium">Please login to access the Cart and Dashboard systems.</p>
              <form onSubmit={handleLogin} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Enter username..." 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-800 rounded-2xl outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-all text-slate-900 dark:text-white font-medium"
                />
                <button 
                  type="submit"
                  className="w-full bg-slate-900 dark:bg-indigo-600 text-white py-4 rounded-2xl font-black uppercase tracking-tight hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Enter Ecosystem
                </button>
              </form>
            </div>
          )}
        </section>

        {/* Task 4: Lazy Loading Check */}
        <section className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-700">
          <h2 className="text-sm font-black uppercase text-slate-400 mb-4 tracking-widest text-center">Lazy Loading Diagnostic</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => navigate('/about')}
              className="px-6 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-xs hover:border-indigo-500 transition-all dark:text-white"
            >
              Lazy Load: About Page
            </button>
            <button 
              onClick={() => navigate('/')}
              className="px-6 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-xs hover:border-indigo-500 transition-all dark:text-white"
            >
              Lazy Load: Home Page
            </button>
          </div>
        </section>

      </div>
    </AssignmentLayout>
  );
};

export default Assignment8;
