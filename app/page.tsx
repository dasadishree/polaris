export default function HomePage() {
  return (
    <main className="page">
      <div className="image-container">
        {/* background */}
        <img
          src="/bg.PNG"
          alt="Horizons Polaris"
          className="scroll-image"
          draggable={false}
        />

        {/* big logo image */}
        <img
          src="/logo.png"
          alt="Horizons Polaris logo"
          className="polaris-logo"
          draggable={false}
        />

        {/* slide / view #1 */}
        <div className="text-overlay">
          <h1>
            A 3-day hackathon
            <br />
            for 100+ teenagers
            <br />
            in Toronto, Canada
          </h1>

          <div className="list-box">
            <ol>
              <li>
                <span className="list-item-text">
                  Sign up and code 35 hours{" "}
                  <span className="accent-text">(ex: games, apps, websites, CLIs)</span>
                </span>
              </li>
              <li>
                <span className="list-item-text">
                  Get invited &amp; flown to Toronto for Horizons Polaris{" "}
                  <span className="accent-text">(August 7-9th)</span>
                </span>
              </li>
              <li>
                <span className="list-item-text">
                  Join a team, build cool projects, make new friends, and get ready
                  for the{" "}
                  <span className="accent-text">best event ever!</span>
                </span>
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h1>Welcome to Horizons Polaris</h1>
          <p></p>
        </div>
      </div>
    </main>
  );
}
