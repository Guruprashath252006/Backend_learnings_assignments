import React, { useState, useEffect } from 'react';
import AssignmentLayout from '../components/AssignmentLayout';

const withButtonAlert = (WrappedComponent) => {
  return (props) => {
    const handleClick = () => alert("Alert from HOC!");
    return <WrappedComponent {...props} handleClick={handleClick} />;
  };
};

const Task1Button = ({ handleClick }) => (
  <button onClick={handleClick} style={{ padding: '5px 10px', border: '1px solid black', margin: '5px 0' }}>
    Show Alert
  </button>
);
const HOCButtonAlert = withButtonAlert(Task1Button);

const withTextOverride = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} title="HOC Modified Text" />;
  };
};

const Task2Text = ({ title }) => (
  <p style={{ margin: '5px 0' }}>Title: <strong>{title}</strong></p>
);
const HOCTextOverride = withTextOverride(Task2Text);

const withDisable = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} isDisabled={true} />;
  };
};

const Task3Button = ({ isDisabled }) => (
  <button disabled={isDisabled} style={{ padding: '5px 10px', border: '1px solid black', backgroundColor: isDisabled ? '#ccc' : '#fff', margin: '5px 0' }}>
    Disabled Button
  </button>
);
const HOCDisableButton = withDisable(Task3Button);

const withInputLogger = (WrappedComponent) => {
  return (props) => {
    const handleLog = (e) => {
      console.log("Input Logged via HOC:", e.target.value);
    };
    return <WrappedComponent {...props} onLog={handleLog} />;
  };
};

const Task4Input = ({ onLog }) => (
  <input type="text" onChange={onLog} placeholder="Type something... (check console)" style={{ padding: '5px', border: '1px solid black', margin: '5px 0', width: '250px' }} />
);
const HOCInputLogger = withInputLogger(Task4Input);

const withAuth = (WrappedComponent) => {
  return (props) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      return <div style={{ color: 'red', fontWeight: 'bold', margin: '5px 0' }}>Access Denied! You must be logged in.</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

const Task5Protected = () => (
  <div style={{ color: 'green', fontWeight: 'bold', margin: '5px 0' }}>You are logged in! Welcome to protected content.</div>
);
const HOCProtectedContent = withAuth(Task5Protected);

const Register = ({ setView }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.push(form);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    alert("Registration Successful!");
    setView('login');
  };

  return (
    <div style={{ border: '1px solid black', padding: '15px', marginBottom: '15px', maxWidth: '400px' }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Register</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '2px' }}>Name: </label>
          <input name="name" onChange={handleChange} required style={{ border: '1px solid gray', padding: '5px', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '2px' }}>Email: </label>
          <input name="email" type="email" onChange={handleChange} required style={{ border: '1px solid gray', padding: '5px', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '2px' }}>Password: </label>
          <input name="password" type="password" onChange={handleChange} required style={{ border: '1px solid gray', padding: '5px', width: '100%' }} />
        </div>
        <button type="submit" style={{ padding: '5px 15px', border: '1px solid black', cursor:'pointer' }}>Register</button>
      </form>
      <div style={{ marginTop: '15px' }}>
        <button type="button" onClick={() => setView('login')} style={{ textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Go to Login</button>
      </div>
    </div>
  );
};

const Login = ({ setView, setIsLogged }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    const user = existingUsers.find(u => u.email === form.email && u.password === form.password);
    
    if (user) {
      alert("Login Success");
      localStorage.setItem('isLoggedIn', 'true');
      setIsLogged(true);
      setView('dashboard');
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <div style={{ border: '1px solid black', padding: '15px', marginBottom: '15px', maxWidth: '400px' }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Login</h3>
      {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '2px' }}>Email: </label>
          <input name="email" type="email" onChange={handleChange} required style={{ border: '1px solid gray', padding: '5px', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '2px' }}>Password: </label>
          <input name="password" type="password" onChange={handleChange} required style={{ border: '1px solid gray', padding: '5px', width: '100%' }} />
        </div>
        <button type="submit" style={{ padding: '5px 15px', border: '1px solid black', cursor:'pointer' }}>Login</button>
      </form>
      <div style={{ marginTop: '15px' }}>
        <span style={{ marginRight: '5px' }}>Don't have an account?</span>
        <button type="button" onClick={() => setView('register')} style={{ textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Register</button>
      </div>
    </div>
  );
};

const Dashboard = ({ setIsLogged, setView }) => {
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLogged(false);
    setView('login');
  };

  return (
    <div style={{ border: '1px solid black', padding: '15px', marginBottom: '15px', maxWidth: '400px' }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Dashboard</h3>
      <p style={{ marginBottom: '15px' }}>Welcome to the protected dashboard area!</p>
      <button onClick={handleLogout} style={{ padding: '5px 15px', border: '1px solid black', cursor:'pointer' }}>Logout</button>
    </div>
  );
};

const Assignment3 = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [view, setView] = useState('login');

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLogged(loggedIn);
    if (loggedIn) {
      setView('dashboard');
    }
  }, []);

  return (
    <AssignmentLayout title="Assignment 3" id={3}>
      <div className="p-4 border rounded bg-white text-black">
        <h2 className="text-xl font-bold mb-4">Assignment 3: Auth & HOCs</h2>
        
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', textDecoration: 'underline' }}>Part 1: Login / Register (localStorage)</h3>
          {!isLogged && view === 'login' && <Login setView={setView} setIsLogged={setIsLogged} />}
          {!isLogged && view === 'register' && <Register setView={setView} />}
          {isLogged && view === 'dashboard' && <Dashboard setIsLogged={setIsLogged} setView={setView} />}
        </div>
        
        <hr style={{ margin: '30px 0', borderColor: '#ccc' }} />

        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', textDecoration: 'underline' }}>Part 2: HOC Tasks</h3>
          
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Task 1: Button Alert HOC</div>
            <HOCButtonAlert />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Task 2: Text Override HOC</div>
            <HOCTextOverride title="Original Title" />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Task 3: Disable Button HOC</div>
            <HOCDisableButton />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Task 4: Input Logger HOC</div>
            <HOCInputLogger />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Task 5: Auth HOC <em>(Depends on localStorage 'isLoggedIn')</em></div>
            <HOCProtectedContent />
          </div>
        </div>

      </div>
    </AssignmentLayout>
  );
};

export default Assignment3;
