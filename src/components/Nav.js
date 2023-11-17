export default function Nav() {
  return (
    <nav>
      <span>
        <span>
          <img src="./Logo.png" />
        </span>
        <span className="logo-text">Power Tech Solutions</span>
      </span>

      <ul className="links">
        <li>About us</li>
        <li>Services</li>
        <li>Case Studies</li>
        <li>Blog</li>
        <li>How it Works</li>
        <li>Hire</li>
      </ul>

      <button className="contact-btn">Contact us</button>
    </nav>
  );
}
