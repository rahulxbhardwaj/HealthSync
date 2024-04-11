import React from "react";
import "../styles/aboutus.scss";
import "@fortawesome/fontawesome-free/css/all.css"; // Import Font Awesome CSS

function TeamSection() {
  let message = `Meet the vibrant team driving HealthSync forward, a fusion of dedication, versatility, and aspiration.\n Comprising fresh minds brimming with potential, they are a powerhouse of multi-talented individuals \n proficient in frontend and backend development, design, and Python programming. With a shared vision and relentless drive,\n they are shaping the future of healthcare technology with innovation and passion at its core.`;

  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">The Team Behind HEATLHSYNC</h2>
            <p className="section-subtitle" id="message">{message}</p>
          </div>
        </div>
      </div>

      <div className="home-container">
        {/* Profile 1 */}
        <div className="profile-card">
          <div className="img">
            <img src="/assets/vatsal.jpeg" alt="Profile 1" />
          </div>
          <div className="caption">
            <h3>Vatsal Mishra</h3>
            <p>Python Developer</p>
            <div className="social-links">
              <a
                href="https://github.com/Vatsal212005"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://3-d-portfolio-xmpn.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-chrome"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Profile 2 */}
        <div className="profile-card">
          <div className="img">
            <img src="/assets/rahul.png" alt="Profile 2" />
          </div>
          <div className="caption">
            <h3>Rahul</h3>
            <p>Full Stack Developer</p>
            <div className="social-links">
              <a
                href="https://github.com/rahulxbhardwaj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://rahulcoded.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-chrome"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Profile 3 */}
        <div className="profile-card">
          <div className="img">
            <img src="/assets/rohit.jpeg" alt="Profile 3" />
          </div>
          <div className="caption">
            <h3>Rohit Papnai</h3>
            <p>UI UX Developer</p>
            <div className="social-links">
              <a
                href="https://github.com/rprohitpapnai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-papnai-012875219"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Profile 4 */}
        <div className="profile-card">
          <div className="img">
            <img src="/assets/dp.png" alt="Profile 4" />
          </div>
          <div className="caption">
            <h3>Arjun Negi</h3>
            <p>Frontend Engineer</p>
            <div className="social-links">
              <a
                href="https://github.com/CoderOtakuX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/arjunnegi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
