import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar } from "./layouts/Navbar";
import { Footer } from "./layouts/Footer";

function App() {
  const { isAuthenticated } = useAuth0();
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
