import './App.css';
import Navbar from './components/navbar/Navbar';

const showNavbar = () => {
  if (window.location.pathname === "/") {
    return <Navbar />
  }
}

function App() {
  return (
   <div className="ui container">{showNavbar()}</div>
  );
}

export default App;
