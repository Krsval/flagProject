import './Navbar.css';
import { Outlet } from "react-router-dom";
import LightMode from '../components/LightMode/LightMode';

const RootLayout = () => {
  
  return (
    <div className="root-layout">
      <header>
        <nav className="navbar">
          <a href="/">The Flag App</a>
          <img className='logo' src="../src/assets/techover-logo.png" alt="TECHOVER" />
          <LightMode/>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
