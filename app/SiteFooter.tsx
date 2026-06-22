export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <a
          href="https://hackclub.com/"
          className="site-footer__flag"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/hc-flag.webp"
            alt="Hack Club flag"
            draggable={false}
          />
        </a>

        <h3>Made with ♥︎ by teenagers, for teenagers at Hack Club</h3>

        <div className="site-footer__links">
          <div className="site-footer__column">
            <h4>Hack Club</h4>
            <a
              href="https://hackclub.com/philosophy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our Philosophy
            </a>
            <a
              href="https://hackclub.com/team/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Team &amp; Board
            </a>
            <a
              href="https://hackclub.com/philanthropy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate
            </a>
          </div>

          <div className="site-footer__column">
            <h4>Horizons</h4>
            <a
              href="https://horizons.hackclub.com/polaris"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign up now
            </a>
            <a
              href="https://horizons.hackclub.com/faq"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAQ
            </a>
            <a
              href="https://guides.horizons.hackclub.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guides
            </a>
          </div>

          <div className="site-footer__column">
            <h4>Community</h4>
            <a
              href="https://slack.hackclub.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Slack
            </a>
            <a
              href="https://hackclub.com/clubs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clubs
            </a>
            <a
              href="https://jams.hackclub.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jams
            </a>
            <a
              href="https://workshops.hackclub.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Workshops
            </a>
            <a
              href="https://hackclub.com/conduct/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
