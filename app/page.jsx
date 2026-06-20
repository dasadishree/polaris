export default function HomePage() {
  return (
    <main className="page">
      <div className="image-container">
        <img
          src="/bg.PNG"
          alt="Horizons Polaris"
          className="scroll-image"
          draggable={false}
        />

        <div className="text-overlay">
          <h1>A 3 day hackathon for 100+ teenagers in Toronto, Canada</h1>

          <ol>
            <li>
              Sign up and code 35 hours (ex: games, apps, websites, CLIs)
            </li>
            <li>
              Get invited & flown to Toronto for Horizons Polaris (August
              7-9th)
            </li>
            <li>
              Join a team, build cool projects, make new friends, and get ready
              for the BEST EVENT EVER!
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}
