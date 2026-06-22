import { pastHackathonVideos } from "./past-hackathons-data";

function YouTubeIcon() {
  return (
    <svg
      className="video-card__yt-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      />
    </svg>
  );
}

export default function PastHackathonsSection() {
  return (
    <section id="past-events" className="past-hackathons">
      <h2 className="past-hackathons__title">our past hackathons</h2>
      <p className="past-hackathons__intro">
        Here&apos;s some of the past events we have organized at Hack Club!
      </p>

      <div className="video-grid">
        {pastHackathonVideos.map((video) => (
          <article key={video.id} className="video-card">
            <div className="video-wrapper video-wrapper--embed">
              <iframe
                src={video.embedSrc}
                title={`${video.title} hackathon recap`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <a
              href={video.watchUrl}
              className="video-card__yt-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${video.title} on YouTube`}
            >
              <YouTubeIcon />
            </a>

            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
