export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-text-box">
          <div className="hero-title">
            Great <span className="word-product">Product</span> is
            <br />
            <span className="word-built"> built by great </span>
            <span className="word-teams">teams</span>
          </div>
          <div className="hero-description">
            We help build and manage a team of world-class developers to bring
            your vision to life
          </div>
          <button className="hero-btn">Let's get started!</button>
        </div>
        <div className="hero-img-box">
          <img src="./hero.png" />
        </div>
      </div>
      <span className="hero-eclipse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
        >
          <circle cx="36" cy="36" r="36" fill="url(#paint0_linear_1_423)" />
          <defs>
            <linearGradient
              id="paint0_linear_1_423"
              x1="72"
              y1="0"
              x2="0"
              y2="72"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F76680" />
              <stop offset="1" stop-color="#57007B" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </div>
  );
}
