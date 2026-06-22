import FaqSection from "./FaqSection";
import SiteFooter from "./SiteFooter";

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

        <div className="info-sections">
          <section className="welcome-section">
            <h2>
              Welcome to
              <br />
              Horizons Polaris
            </h2>
            <p>
              This August, we are hosting a 3 day hackathon from Aug 7th - 9th
              in Toronto, Canada! Horizons Polaris is organized by Hack Club, a
              nonprofit and community of 60,000 high school makers around the
              world. Horizons Polaris is the Canada event, part of Horizons: a
              series of 7 Hack Club hackathons taking place around the world.
            </p>
            <p>
              Food and accomodation will be provided, as well as travel
              stipends! The hackathon is 100% free for all attendees no matter
              where you are from, because we want to make all teens able to
              create amazing projects that they are proud of regardless of their
              financial or geographical background.
            </p>
            <p>
              To sign up, click the button to start making projects on the
              Horizons platform and join #horizons-polaris on the Hack Club
              Slack!
            </p>
          </section>

          <section className="hackathon-section">
            <h2>What is a hackathon?</h2>
            <p>
              A hackathon is a social coding marathon where teenagers come
              together to code projects for fun and share them with each other,
              working towards goals, exploring new places, and making new friends
              all in a single weekend. You don&apos;t need coding experience, you
              will learn so much just by doing!
            </p>
          </section>
        </div>

        {/* past hackathons */}
        <section className="past-hackathons">
          <h2 className="past-hackathons__title">our past hackathons</h2>
          <p className="past-hackathons__intro">
            Here&apos;s some of the past events we have organized at Hack Club!
          </p>

          <div className="video-grid">
            <article className="video-card">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/2pcw29ttVZw?si=gQk-kESzO_OnMQFL"
                  title="STASIS hackathon recap"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <h3>STASIS</h3>
              <p>
                A hardware hackathon in Austin, Texas with hardware grants &amp; guest
                Michael Dell
              </p>
            </article>

            <article className="video-card">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/7K_E7tG-O68?si=plT2IE8hZ4oh7DiX"
                  title="PARTHENON hackathon recap"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <h3>PARTHENON</h3>
              <p>
                The largest high school hackathon for girls at Duolingo HQ in NYC &amp; guests Michelle Peluso and Tarika Barrett
              </p>
            </article>

            <article className="video-card">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/uXWMr0gdLJA?si=VvvQC-tApBKexYkg"
                  title="Shipwrecked hackathon recap"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <h3>Shipwrecked</h3>
              <p>A hackathon on an island in Boston!</p>
            </article>

            <article className="video-card">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/8iM1W8kXrQA?si=PXpeRHhcjqvh4xIs"
                  title="Scrapyard hackathon recap"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <h3>Scrapyard</h3>
              <p>A hackathon in Texas for the wildest, silliest projects possible!</p>
            </article>

            <article className="video-card">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/QvCoISXfcE8?si=jNgyAHt88ujhgm4Y"
                  title="Apocalypse hackathon recap"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <h3>Apocalypse</h3>
              <p>Canada&apos;s largest high school hackathon</p>
            </article>
          </div>
        </section>

        <FaqSection />

        <SiteFooter />
      </div>
    </main>
  );
}
