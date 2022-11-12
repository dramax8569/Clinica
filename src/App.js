import logo from './logo.svg';
import './App.css';

import { Profile } from "./login/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./login/login";
import { LogoutButton } from "./login/logout";
import { Navbar } from "./layouts/Navbar";
import { Footer } from "./layouts/Footer";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>        
      </header>
      {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
