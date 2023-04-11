import logo from "./assets/logo.svg";
import profileImage from "./assets/image-amy.webp";

function App() {
  return (
    <div className="container">
      <header>
        <img src={logo} alt="" className="logo" />
        <button>Free Consultation</button>
      </header>

      <div className="section hero">
        <h1 className="heading-lg">Design solutions made easy</h1>
        <p>
          With over ten years of experience in various design disciplines,
          I&apos;m your one-stop shop for your design needs.
        </p>
      </div>

      <div className="grid-container">
        <div className="grid-item">Graphic Design</div>
        <div className="grid-item">UI/UX</div>
        <div className="grid-item">Apps</div>
        <div className="grid-item">Photography</div>
        <div className="grid-item">Illustrations</div>
        <div className="grid-item">Motion Graphics</div>
      </div>

      <div className="section bio">
        <img src={profileImage} alt="" className="profile-image" />

        <div className="section">
          <h2 className="heading-md">
            I&apos;m Amy, and I&apos;d love to work on your next project
          </h2>

          <p>
            I love working with others to create beautiful design solutions.
            I&apos;ve designed everything from brand illustrations to complete
            mobile apps. I&apos;m also handy with a camera!
          </p>

          <button>Free Consultation</button>
        </div>
      </div>

      <h3 className="heading-sm">My Work</h3>

      <div className="section cta">
        <div>
          <h2 className="heading-md">Book a call with me</h2>
          <p>
            I&apos;d love to have a chat to see how I can help you. The best
            first step is for us to discuss your project during a free
            consultation. Then we can move forward from there.
          </p>
        </div>
        <button>Free Consultation</button>
      </div>

      <footer>
        <img src={logo} alt="" className="logo" />
        <button>Free Consultation</button>
      </footer>
    </div>
  );
}

export default App;
