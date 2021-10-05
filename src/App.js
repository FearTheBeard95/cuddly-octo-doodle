import logo from './logo.svg';
import './App.css';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <p>
          Users dashboard
        </p>
      </div>
      <UserDashboard />
    </div>
  );
}

export default App;
