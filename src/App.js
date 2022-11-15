import logo from './logo.svg';
import './App.css';

import { Navbar } from "./layouts/Navbar";
import { Footer } from "./layouts/Footer";

function App() {
  
  return (
    

    <div className="App">
      <header className="App-header">
        <Navbar/>        
      </header>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
