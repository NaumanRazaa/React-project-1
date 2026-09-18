import "./Project1.css";
import reactLogo from "../assests/react-1-logo-png-transparent.png";

export function Project1() {
  return (
    <>
    <Header/>
    
      <main>
        <h1>Fun fact about React!</h1>
        <ul className="facts-list">
          <li>Was released in 2013!</li>
          <li>Was created by Jordan Walke</li>
          <li>Is maintained by Meta</li>
          <li>powers thousand of enterprises apps, including moblie apps</li>
          
        </ul>
      </main>

      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer>
      <small>2026 Ziroll Development. All rights reserved.</small>
    </footer>
  );
}

function Header() {
  return (
    <header className="header">
      <img
        src={reactLogo}
        alt="React logo"
        width={100}
        height={100}
      />

      <ul className="nav-list">
        <li className="nav-list-item">Pricing</li>
        <li className="nav-list-item">About</li>
        <li className="nav-list-item">Contacts</li>
         
      
      </ul>
    </header>
  );
}
