import React, { useReducer, useState } from 'react';
import AssignmentLayout from '../components/AssignmentLayout';

// --- Task 1: Counter Reducer ---
const counterInitialState = { count: 0 };
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1 };
    case 'DECREMENT': return { count: state.count - 1 };
    case 'RESET': return counterInitialState;
    case 'INCREMENT_BY_VALUE': return { count: state.count + action.payload };
    default: return state;
  }
};

// --- Task 2: Form Reducer ---
const formInitialState = { name: '', email: '', password: '' };
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM':
      return formInitialState;
    default:
      return state;
  }
};

// --- Task 3: Todo Reducer ---
const todoInitialState = { todos: [] };
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, action.payload] };
    case 'DELETE_TODO':
      return { todos: state.todos.filter((_, index) => index !== action.index) };
    case 'UPDATE_TODO':
      return {
        todos: state.todos.map((todo, index) =>
          index === action.index ? action.payload : todo
        )
      };
    default:
      return state;
  }
};

const Assignment7 = () => {
  // Counter State
  const [counterState, counterDispatch] = useReducer(counterReducer, counterInitialState);

  // Form State
  const [formState, formDispatch] = useReducer(formReducer, formInitialState);

  // Todo State
  const [todoState, todoDispatch] = useReducer(todoReducer, todoInitialState);
  const [todoInput, setTodoInput] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  // Todo Handlers
  const handleAddOrUpdateTodo = () => {
    if (!todoInput.trim()) return;
    if (editingIndex !== null) {
      todoDispatch({ type: 'UPDATE_TODO', index: editingIndex, payload: todoInput });
      setEditingIndex(null);
    } else {
      todoDispatch({ type: 'ADD_TODO', payload: todoInput });
    }
    setTodoInput('');
  };

  const handleEditTodo = (index) => {
    setTodoInput(todoState.todos[index]);
    setEditingIndex(index);
  };

  return (
    <AssignmentLayout title="Assignment 7: useReducer Master" id={7}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Task 1: Counter */}
        <div className="p-6 border-2 border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-black mb-6 uppercase tracking-tight border-b pb-2">Task 1: Counter</h2>
          <div className="text-5xl font-black mb-8 text-center text-indigo-600">{counterState.count}</div>
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => counterDispatch({ type: 'INCREMENT' })}
              className="bg-slate-900 text-white py-2 rounded-lg font-bold hover:bg-slate-800 transition-colors uppercase text-xs"
            >
              Increment
            </button>
            <button 
              onClick={() => counterDispatch({ type: 'DECREMENT' })}
              className="bg-slate-100 text-slate-900 py-2 rounded-lg font-bold hover:bg-slate-200 transition-colors uppercase text-xs"
            >
              Decrement
            </button>
            <button 
              onClick={() => counterDispatch({ type: 'INCREMENT_BY_VALUE', payload: 5 })}
              className="bg-indigo-50 text-indigo-700 py-2 rounded-lg font-bold hover:bg-indigo-100 transition-colors uppercase text-xs col-span-2"
            >
              Increment by 5
            </button>
            <button 
              onClick={() => counterDispatch({ type: 'RESET' })}
              className="mt-2 text-rose-500 font-bold hover:underline uppercase text-[10px] w-full col-span-2"
            >
              Reset Counter
            </button>
          </div>
        </div>

        {/* Task 2: Form Handling */}
        <div className="p-6 border-2 border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-black mb-6 uppercase tracking-tight border-b pb-2">Task 2: Form Handling</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Name</label>
              <input 
                type="text" 
                name="name"
                value={formState.name}
                onChange={(e) => formDispatch({ type: 'SET_FIELD', field: 'name', value: e.target.value })}
                className="w-full border-2 border-slate-100 rounded-lg p-2 focus:border-indigo-500 outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Email</label>
              <input 
                type="email" 
                name="email"
                value={formState.email}
                onChange={(e) => formDispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })}
                className="w-full border-2 border-slate-100 rounded-lg p-2 focus:border-indigo-500 outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Password</label>
              <input 
                type="password" 
                name="password"
                value={formState.password}
                onChange={(e) => formDispatch({ type: 'SET_FIELD', field: 'password', value: e.target.value })}
                className="w-full border-2 border-slate-100 rounded-lg p-2 focus:border-indigo-500 outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>
            <button 
              onClick={() => {
                alert(`Submitted: ${JSON.stringify(formState)}`);
                formDispatch({ type: 'RESET_FORM' });
              }}
              className="w-full bg-slate-900 text-white py-3 rounded-lg font-black hover:bg-slate-800 transition-colors uppercase text-xs"
            >
              Submit & Reset
            </button>
          </div>
        </div>

        {/* Task 3: Todo CRUD */}
        <div className="p-6 border-2 border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-black mb-6 uppercase tracking-tight border-b pb-2">Task 3: Todo CRUD</h2>
          <div className="flex gap-2 mb-6">
            <input 
              type="text" 
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              className="flex-1 border-2 border-slate-100 rounded-lg p-2 focus:border-indigo-500 outline-none transition-colors"
              placeholder="What needs to be done?"
            />
            <button 
              onClick={handleAddOrUpdateTodo}
              className="bg-indigo-600 text-white px-4 rounded-lg font-bold hover:bg-indigo-700 transition-colors uppercase text-xs"
            >
              {editingIndex !== null ? 'Update' : 'Add'}
            </button>
          </div>
          <ul className="space-y-3">
            {todoState.todos.map((todo, index) => (
              <li key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl group border border-transparent hover:border-slate-200 transition-all">
                <span className="font-medium text-slate-700">{todo}</span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleEditTodo(index)}
                    className="text-slate-400 hover:text-indigo-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                  </button>
                  <button 
                    onClick={() => todoDispatch({ type: 'DELETE_TODO', index })}
                    className="text-slate-400 hover:text-rose-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                </div>
              </li>
            ))}
            {todoState.todos.length === 0 && (
              <p className="text-center text-slate-400 text-xs italic py-4">No todos yet. Add one above!</p>
            )}
          </ul>
        </div>

      </div>
    </AssignmentLayout>
  );
};

export default Assignment7;

