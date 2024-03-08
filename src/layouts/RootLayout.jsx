import './Navbar.css';
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav className="navbar">
          <a href="/">The Flag App</a>
          <img src="../src/assets/techover-logo.png" alt="TECHOVER" />
          <button className="dark-light-mode">
            <img src="../src/assets/moon.svg" alt="Moon" />
            <p>Dark Mode</p>
          </button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
