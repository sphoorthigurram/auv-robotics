import { useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Subteams', href: '#subteams' },
  { label: 'Vehicles', href: '#vehicles' },
  { label: 'Team', href: '#team' },
  { label: 'Impact', href: '#impact' },
  { label: 'Recruitment', href: '#recruitment' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Contact', href: '#contact' },
];

const subteams = [
  {
    name: 'Mechanical',
    detail:
      'Designs and fabricates efficient, watertight vehicle structures using hydrodynamics, manufacturing, and rapid iteration.',
    meeting: 'Thursdays, 7:00 - 9:00 PM',
    location: 'ZACH 250 or FEDC',
  },
  {
    name: 'Electrical',
    detail:
      'Builds the power distribution, embedded electronics, sensor integration, and wiring systems that keep the vehicle reliable underwater.',
    meeting: 'Thursdays, 7:30 - 8:30 PM',
    location: 'ZACH 282K',
  },
  {
    name: 'Programming',
    detail:
      'Develops thruster control, autonomy, perception, and predictive computer vision algorithms for the vehicle mini PC.',
    meeting: 'Tuesdays, 6:00 - 7:00 PM',
    location: 'ZACH 282D',
  },
];

const vehicles = [
  '2024-2025: Swim Shady',
  '2023-2024: Guppy',
  '2022-2023: Ditto',
  '2021-2022: Ray III',
  '2020-2021: Ray II',
  '2019-2020: Ray',
  '2018-2019: Minnow',
  '2017-2018: Nessie',
  '2016-2017: Sharkbait',
  '2015-2016: Ula',
];

const sponsors = ['Phillips 66', 'Chevron', 'L3Harris', 'Texas A&M Engineering', 'TRP', 'Tektronix'];

const officers = [
  { role: 'Team Captain', name: 'Rishika Desai' },
  { role: 'Project Manager', name: 'Azhure Landers' },
  { role: 'Vice Captain', name: 'Nisha Murali' },
  { role: 'Vice Project Manager', name: 'Parvathi Menon' },
  { role: 'Mechanical Lead', name: 'Asmita Subash' },
  { role: 'Mechanical Sub-Lead', name: 'Adithi Iyer Ganesan' },
  { role: 'Manufacturing Lead', name: 'Brooklyn Simpson' },
  { role: 'Programming Co-Lead', name: 'Sanjana Anand' },
  { role: 'Programming Co-Lead', name: 'Tanvi Kangralkar' },
  { role: 'Programming Mentor', name: 'Alex Holmes' },
  { role: 'Electrical Lead', name: 'Raquel Susko' },
  { role: 'Electrical Sub-Lead', name: 'Tanvi Naragoni' },
  { role: 'Electrical Mentor', name: 'Tharshini Subash' },
  { role: 'Electrical Mentor', name: 'Adiba Mahjabeen' },
  { role: 'Social Media Officer', name: 'Ana Cruz' },
  { role: 'Secretary Officer', name: 'Daneli Estrada' },
  { role: 'Historian Officer', name: 'TBD' },
];

const achievements = [
  {
    title: 'RoboSub Competition 2023 Semifinalists',
    date: 'August 06, 2023',
    detail:
      'Eleven Texas A&M engineering students competed against 33 teams in San Diego and qualified for the semifinals.',
  },
  {
    title: 'Brightest Spark of Curiosity',
    date: 'August 02, 2022',
    detail:
      'Recognized at RoboSub for curiosity, technical questions, and eagerness to learn from other teams.',
  },
  {
    title: '2nd Place Video at RoboSub',
    date: 'August 04, 2019',
    detail:
      'Created a themed technical video for RoboSub 2019 and placed second, within one point of first place.',
  },
  {
    title: 'Virtual Project Showcase Winner',
    date: 'December 20, 2017',
    detail:
      'Earned first place in the non-capstone category in Texas A&M Engineering virtual project showcase programming.',
  },
  {
    title: 'RoboSub Competition 2017 Semifinalists',
    date: 'August 06, 2017',
    detail:
      'Reached the semifinals at the international RoboSub competition with a student-designed and programmed AUV.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="TAMU Underwater Robotics home">
          <span className="brand-mark">AUV</span>
          <span>
            <strong>TAMU Underwater Robotics</strong>
            <small>Women in Robotics, Engineering & Development</small>
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-media" aria-hidden="true">
            <div className="vehicle-visual">
              <span className="vehicle-body" />
              <span className="vehicle-sensor" />
              <span className="vehicle-thruster left" />
              <span className="vehicle-thruster right" />
            </div>
          </div>

          <div className="hero-content">
            <p className="eyebrow">Texas A&M University</p>
            <h1>Student-built autonomous underwater vehicles for RoboSub and real engineering growth.</h1>
            <p>
              WIRED Underwater Robotics is a student-led project team where undergraduate engineers design, build, and
              test autonomous underwater vehicles while learning multidisciplinary teamwork.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#recruitment">
                Join the Team
              </a>
              <a className="secondary-action" href="#sponsors">
                Support the Program
              </a>
            </div>
          </div>
        </section>

        <section className="stats-band" aria-label="Team highlights">
          <div>
            <strong>2015</strong>
            <span>Founded at Texas A&M</span>
          </div>
          <div>
            <strong>10</strong>
            <span>AUV generations</span>
          </div>
          <div>
            <strong>40%</strong>
            <span>Members start without AUV experience</span>
          </div>
        </section>

        <section id="about" className="content-section split-section">
          <div>
            <p className="section-kicker">About Us</p>
            <h2>Built for hands-on engineering, mentorship, and competition.</h2>
          </div>
          <div className="section-copy">
            <p>
              WIRED Underwater Robotics is part of Women in Robotics, Engineering, and Development at Texas A&M
              University. The team builds an autonomous underwater vehicle for the annual RoboSub Competition and
              continues to apply lessons from each season to improve the next robot.
            </p>
            <p>
              Membership is open to undergraduate engineering students across backgrounds and class years. No previous
              experience is required; the team is designed to help students develop technical confidence, leadership,
              and practical engineering skills.
            </p>
          </div>
        </section>

        <section className="mission-band">
          <p className="section-kicker">Mission</p>
          <h2>
            Create a place where students apply classroom knowledge to real systems, solve difficult engineering
            problems, and grow as multidisciplinary leaders.
          </h2>
        </section>

        <section id="subteams" className="content-section">
          <div className="section-heading">
            <p className="section-kicker">Subteams</p>
            <h2>Focused teams, one integrated vehicle.</h2>
          </div>
          <div className="subteam-grid">
            {subteams.map((team) => (
              <article className="info-card" key={team.name}>
                <h3>{team.name}</h3>
                <p>{team.detail}</p>
                <dl>
                  <div>
                    <dt>Meeting</dt>
                    <dd>{team.meeting}</dd>
                  </div>
                  <div>
                    <dt>Location</dt>
                    <dd>{team.location}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <p className="small-note">Meeting locations may vary each week. Check the team Discord for current details.</p>
        </section>

        <section id="vehicles" className="content-section vehicles-section">
          <div className="section-heading">
            <p className="section-kicker">Vehicles</p>
            <h2>Every year adds another tested AUV platform.</h2>
          </div>
          <div className="vehicle-list">
            {vehicles.map((vehicle) => (
              <span key={vehicle}>{vehicle}</span>
            ))}
          </div>
        </section>

        <section id="team" className="content-section">
          <div className="section-heading">
            <p className="section-kicker">2025-2026 Officers</p>
            <h2>Student leaders coordinate every build discipline.</h2>
          </div>
          <div className="officer-grid">
            {officers.map((officer) => (
              <article className="officer-card" key={`${officer.role}-${officer.name}`}>
                <span>{officer.role}</span>
                <strong>{officer.name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="impact" className="content-section impact-section">
          <div className="section-heading">
            <p className="section-kicker">Impact</p>
            <h2>Competition results, outreach, and engineering showcases.</h2>
          </div>
          <div className="timeline">
            {achievements.map((item) => (
              <article className="timeline-item" key={item.title}>
                <span>{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="recruitment" className="cta-section">
          <div>
            <p className="section-kicker">Recruitment</p>
            <h2>No previous AUV experience required.</h2>
            <p>
              First-year through senior engineering students can contribute across mechanical, electrical, programming,
              testing, outreach, and project leadership roles.
            </p>
          </div>
          <a className="primary-action" href="#contact">
            Ask About Joining
          </a>
        </section>

        <section id="sponsors" className="content-section">
          <div className="section-heading">
            <p className="section-kicker">Sponsors</p>
            <h2>Industry and university support makes the build possible.</h2>
          </div>
          <div className="sponsor-grid">
            {sponsors.map((sponsor) => (
              <span key={sponsor}>{sponsor}</span>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Connect with TAMU Underwater Robotics</h2>
          <p>Texas A&M University, College Station, Texas</p>
        </div>
        <div className="footer-links">
          <a href="https://reaftamu.wixsite.com/website" target="_blank" rel="noreferrer">
            Current Wix Site
          </a>
          <a href="https://robosub.org" target="_blank" rel="noreferrer">
            RoboSub
          </a>
          <a href="mailto:reaftamu@gmail.com">reaftamu@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
