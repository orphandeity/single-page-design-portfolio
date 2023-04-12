import logo from "./assets/logo.svg";
import profileImage from "./assets/image-amy.webp";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="container">
      <header>
        <img src={logo} alt="" className="logo" />
        <button>Free Consultation</button>
      </header>

      <main>
        <section>
          <div className="hero">
            <h1 className="heading-lg">Design solutions made easy</h1>
            <p>
              With over ten years of experience in various design disciplines,
              I&apos;m your one-stop shop for your design needs.
            </p>
          </div>

          <div className="grid-container">
            <div className="grid-item">
              <img src="./pattern-graphic-design.svg" alt="" />
              <span>Graphic Design</span>
            </div>
            <div className="grid-item">
              <img src="./pattern-ui-ux.svg" alt="" />
              <span>UI/UX</span>
            </div>
            <div className="grid-item">
              <img src="./pattern-apps.svg" alt="" />
              <span>Apps</span>
            </div>
            <div className="grid-item">
              <img src="./pattern-photography.svg" alt="" />
              <span>Photography</span>
            </div>
            <div className="grid-item">
              <img src="./pattern-illustrations.svg" alt="" />
              <span>Illustrations</span>
            </div>
            <div className="grid-item">
              <img src="./pattern-motion-graphics.svg" alt="" />
              <span>Motion Graphics</span>
            </div>
          </div>
        </section>

        <section className="bio">
          <img src={profileImage} alt="" className="profile-image" />

          <div>
            <h2>
              I&apos;m Amy, and I&apos;d love to work on your next project
            </h2>

            <p>
              I love working with others to create beautiful design solutions.
              I&apos;ve designed everything from brand illustrations to complete
              mobile apps. I&apos;m also handy with a camera!
            </p>

            <button>Free Consultation</button>
          </div>
        </section>

        <section className="work">
          <h3>My Work</h3>
          <Slider />
        </section>

        <section className="cta">
          <h2>Book a call with me</h2>
          <p>
            I&apos;d love to have a chat to see how I can help you. The best
            first step is for us to discuss your project during a free
            consultation. Then we can move forward from there.
          </p>
          <button>Free Consultation</button>
        </section>
      </main>
      <footer>
        <img src={logo} alt="" className="logo" />
        <button>Free Consultation</button>
      </footer>
    </div>
  );
}

export default App;
