import Navbar from './components/Navbar' 
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1> teste </h1>
      </div><div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
