export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar__logo">
        <img src="/logo.png" alt="Horizons Polaris" draggable={false} />
      </a>

      <div className="navbar__links">
        <a href="#welcome" className="navbar__link">
          Welcome
        </a>
        <a href="#hackathon" className="navbar__link">
          What is a hackathon?
        </a>
        <a href="#past-events" className="navbar__link">
          Past events
        </a>
        <a href="#faq" className="navbar__link">
          FAQ
        </a>
        <a
          href="https://horizons.hackclub.com/polaris"
          className="navbar__join"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join
        </a>
      </div>
    </nav>
  );
}
